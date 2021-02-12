import React from 'react';
import RulesContainer from './RulesContainer'

export default class Rules extends React.Component {
  constructor(props) {
    super(props);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.deleteRule = this.deleteRule.bind(this);
    this.state = { rules: [] };
  }

  componentDidMount() {
    this.getCurrentRules();
  }

  deleteRule(id) {
    const rules = this.state.rules.filter(rule => rule['id'] !== id);
    this.setState({
      rules: rules
    });
  }

  getCurrentRules() {
    // We should hit an endpoint to get the current rules
    const rules = this.mockRules();
    this.setState({
      rules: rules
    });
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
    const newRules = this.reorder(
      this.state.rules,
      result.source.index,
      result.destination.index
    );
    this.setState({ rules: newRules });
    console.log("state:", this.state);
  }

  mockRules() {
    return [
      { id: 0, index: 0, contagionRisk: 'Alto', durationValue: 60, durationCmp: '>', m2Value: 30, m2Cmp: '<', spaceValue: 'Cerrado' },
      { id: 1, index: 1, contagionRisk: 'Medio', durationValue: 60, durationCmp: '<', m2Value: 50, m2Cmp: '>', spaceValue: 'Abierto' },
      { id: 2, index: 2, contagionRisk: 'Alto', durationValue: 120, durationCmp: '>' },
      { id: 3, index: 3, contagionRisk: 'Bajo', m2Value: 100, m2Cmp: '>', spaceValue: 'Abierto' }
    ];
  }

  render() {
    return <RulesContainer rules={this.state.rules} onDragEnd={this.onDragEnd} deleteRule={this.deleteRule} />;
  }
}
