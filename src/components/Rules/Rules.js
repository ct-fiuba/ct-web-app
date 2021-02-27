import React from 'react';
import RulesContainer from './RulesContainer'
import AppBar from '../Shared/AppBar';

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
    new_rules = this.updateIndexesFromDeletion(new_rules, deletedRule['index']);
    this.setState({
      rules: new_rules
    });
    this.updateSavingButton(new_rules);
  }

  updateIndexes(new_rules) {
    for (let rule of new_rules) {
      rule['index'] = rule['index'] + 1;
    }
    return new_rules;
  }

  updateIndexesFromDeletion(new_rules, indexDeleted) {
    for (let rule of new_rules) {
      if (rule['index'] > indexDeleted) {
        rule['index'] = rule['index'] - 1;
      }
    }
    return new_rules;
  }

  addRule(rule) {
    rule['id'] = this.state.max_index + 1;
    this.setState({max_index: this.state.max_index + 1})
    rule['index'] = 0;
    rule['created'] = true;
    let new_rules = JSON.parse(JSON.stringify(this.state.rules)); //deep clone to update changes
    new_rules = this.updateIndexes(new_rules);
    new_rules.unshift(rule);
    this.setState({
      rules: new_rules
    });
    this.updateSavingButton(new_rules);
  }

  async getCurrentRules() {
    await this.getRules();
  }

  reorder(list, startIndex, endIndex) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    result.forEach(function (rule, i) {
      rule.index = i;
    });

    return result;
  }

  onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }
    const new_rules = this.reorder(
      this.state.rules,
      result.source.index,
      result.destination.index
    );
    this.setState({ rules: new_rules });
    this.updateSavingButton(new_rules);
  }

  mockRules() {
    this.setState({ max_index: 3 });
    return [
      { id: 0, index: 0, contagionRisk: 'Alto', durationValue: 60, durationCmp: '>', m2Value: 30, m2Cmp: '<', spaceValue: 'Cerrado' },
      { id: 1, index: 1, contagionRisk: 'Medio', durationValue: 60, durationCmp: '<', m2Value: 50, m2Cmp: '>', spaceValue: 'Abierto' },
      { id: 2, index: 2, contagionRisk: 'Alto', durationValue: 120, durationCmp: '>' },
      { id: 3, index: 3, contagionRisk: 'Bajo', m2Value: 100, m2Cmp: '>', spaceValue: 'Abierto' }
    ];
  }

  async getRules() {
    fetch(process.env.REACT_APP_USER_API_URL + '/rules')
      .then(response => response.json())
      .then(data => {
        for (let rule of data) {
          rule['id'] = rule['_id'];
        }
        data.sort(function (a, b) {
          return a.index - b.index;
        });
        this.setState({ max_index: data.length, rules: data, savedRules: JSON.parse(JSON.stringify(data)) });
      })
      .catch(err => console.log('Error at fetch: ', err));
  }

  areRulesEqual(new_rules) {
    if (new_rules.length !== this.state.savedRules.length) {
      return false;
    }

    for (const savedRule of this.state.savedRules) {
      const currentRule = new_rules.filter(rule => rule['id'] === savedRule.id)
      if (currentRule.length === 0) {
        // deleted
        return false;
      }
      if (currentRule[0].index !== savedRule.index) {
        // updated
        return false;
      }
    }
    return true;
  }

  updateSavingButton(new_rules) {
    this.setState({
      canSaveChanges: !this.areRulesEqual(new_rules)
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

  async addNewRules(new_rules) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(new_rules)
    };
    return fetch(process.env.REACT_APP_USER_API_URL + '/rules', requestOptions)
  }

  async deleteRules(deleted_rules) {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(deleted_rules)
    };
    return fetch(process.env.REACT_APP_USER_API_URL + '/rules', requestOptions)
  }

  async updateRules(updated_rules) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated_rules)
    };
    return fetch(process.env.REACT_APP_USER_API_URL + '/rules', requestOptions)
  }

  async saveChanges() {
    let changes = this.calculateChanges(this.state.rules);
    if (changes['added'].length > 0) {
      const addRes = await this.addNewRules({ rules: changes['added'] });
    }
    if (changes['updated'].length > 0) {
      const updateRes = await this.updateRules({ rules: changes['updated'] });
    }
    if (changes['deleted'].length > 0) {
      const deleteRes = await this.deleteRules({ ruleIds: changes['deleted'] });
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
