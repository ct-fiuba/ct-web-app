import React from 'react';
import RulesContainer from '../RulesContainer'
import AppBar from '../../Shared/AppBar';
import * as rulesUtils from '../../../utils/rulesUtils';
import * as rulesService from '../../../services/rulesService';

export default class Rules extends React.Component {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.deleteRule = this.deleteRule.bind(this);
    this.addRule = this.addRule.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.state = { rules: [], max_index: 0, savedRules: [], canSaveChanges: false};
  }

  async componentDidMount() {
    await this.getCurrentRules();
  }

  deleteRule(id) {
    const deletedRule = this.state.rules.filter(rule => rule['id'] === id)[0];
    let new_rules = this.state.rules.filter(rule => rule['id'] !== id);
    new_rules = rulesUtils.updateIndexesFromDeletion(new_rules, deletedRule['index']);
    this.setState({
      rules: new_rules
    });
    this.updateSavingButton(new_rules);
  }

  addRule(rule) {
    let new_rules = JSON.parse(JSON.stringify(this.state.rules)); //deep clone to update changes
    rule['id'] = this.state.max_index + 1;
    this.setState({max_index: this.state.max_index + 1})
    rule['index'] = rulesUtils.calculateNewRuleIndex(new_rules, rule.contagionRisk);
    rule['created'] = true;
    new_rules = rulesUtils.updateIndexesFromAddition(new_rules, rule.index);
    new_rules.unshift(rule);
    new_rules = rulesUtils.forceHighMidLowOrder(new_rules);
    this.setState({
      rules: new_rules
    });
    this.updateSavingButton(new_rules);
  }

  async getCurrentRules() {
    const rules = await rulesService.getRules();
    this.setState({ max_index: rules.length, rules: rules, savedRules: JSON.parse(JSON.stringify(rules)) });
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }
    let new_rules = rulesUtils.reorder(
      this.state.rules,
      result.source.index,
      result.destination.index
    );
    new_rules = rulesUtils.forceHighMidLowOrder(new_rules);
    this.setState({ rules: new_rules });
    this.updateSavingButton(new_rules);
  }

  updateSavingButton(new_rules) {
    this.setState({
      canSaveChanges: !rulesUtils.areRulesEqual(new_rules, this.state.savedRules)
    });
  }

  calculateChanges() {
    let changes = {'deleted': [], 'updated': [], 'added': []};

    for (const savedRule of this.state.savedRules) {
      const currentRule = this.state.rules.filter(rule => rule['id'] === savedRule.id)
      if (currentRule.length === 0) {
        changes['deleted'].push(savedRule.id);
        continue;
      }
      if (currentRule[0].index !== savedRule.index) {
        changes['updated'].push(currentRule[0]);
      }
    }
    changes['added'] = this.state.rules.filter(rule => rule['created'] === true)
    return changes;
  }

  async saveChanges() {
    let changes = this.calculateChanges(this.state.rules);
    if (changes['added'].length > 0) {
      await rulesService.addNewRules({ rules: changes['added'] });
    }
    if (changes['updated'].length > 0) {
      await rulesService.updateRules({ rules: changes['updated'] });
    }
    if (changes['deleted'].length > 0) {
      await rulesService.deleteRules({ ruleIds: changes['deleted'] });
    }
		window.location.replace("/reglas");
  }

  render() {
    return (
      <div>
        <AppBar loggedIn={true} />
        <RulesContainer 
          rules={this.state.rules}
          onDragEnd={this.onDragEnd}
          deleteRule={this.deleteRule}
          addRule={this.addRule}
          saveChanges={this.saveChanges}
          canSaveChanges={this.state.canSaveChanges} />
      </div>
    );
  }
}