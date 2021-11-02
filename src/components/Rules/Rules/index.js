import React from 'react';
import RulesContainer from '../RulesContainer'
import AppBar from '../../Shared/AppBar';
import * as rulesUtils from '../../../utils/rulesUtils';
import * as rulesService from '../../../services/rulesService';
import * as vaccinesService from '../../../services/vaccinesService';

export default class Rules extends React.Component {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.deleteRule = this.deleteRule.bind(this);
    this.getCurrentVaccines = this.getCurrentVaccines.bind(this);
    this.addRule = this.addRule.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.state = { rules: null, max_index: 0, savedRules: [], canSaveChanges: false, vaccines: []};
  }

  async componentDidMount() {
    await this.getCurrentRules();
    await this.getCurrentVaccines();
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
    rule['id'] = this.state.max_index + 1;
    this.setState({max_index: this.state.max_index + 1})
    rule['index'] = 0;
    rule['created'] = true;
    let new_rules = JSON.parse(JSON.stringify(this.state.rules)); //deep clone to update changes
    new_rules = rulesUtils.updateIndexesFromAddition(new_rules);
    new_rules.unshift(rule);
    this.setState({
      rules: new_rules
    });
    this.updateSavingButton(new_rules);
  }

  async getCurrentRules() {
    const rules = await rulesService.getRules();
    this.setState({ max_index: rules.length, rules: rules, savedRules: JSON.parse(JSON.stringify(rules)) });
  }

  async getCurrentVaccines() {
    const vaccines = await vaccinesService.getVaccines();
    this.setState({ vaccines });
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }
    const new_rules = rulesUtils.reorder(
      this.state.rules,
      result.source.index,
      result.destination.index
    );
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
          vaccines={this.state.vaccines}
          getCurrentVaccines={this.getCurrentVaccines}
          onDragEnd={this.onDragEnd}
          deleteRule={this.deleteRule}
          addRule={this.addRule}
          saveChanges={this.saveChanges}
          canSaveChanges={this.state.canSaveChanges} />
      </div>
    );
  }
}
