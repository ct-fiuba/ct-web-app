import React from 'react';
import * as vaccinesService from '../../../services/vaccinesService';
import EditVaccinesTable from '../EditVaccinesTable'

export default class Vaccines extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vaccines: undefined };
  }

  async componentDidMount() {
    await this.getCurrentVaccines();
  }

  async getCurrentVaccines() {
    const vaccines = await vaccinesService.getVaccines();
    console.log("DEBUG", vaccines);
    this.setState({ vaccines: vaccines });
  }

  async addNewVaccine(vaccineInfo) {
    await vaccinesService.addNewVaccine(vaccineInfo);
  }

  async deleteVaccine(vaccineId) {
    await vaccinesService.deleteVaccine(vaccineId);
  }

  render() {
    return (
      <EditVaccinesTable vaccines={this.state.vaccines} />
    );
  }
}
