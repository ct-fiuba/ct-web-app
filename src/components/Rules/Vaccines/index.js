import React from 'react';
import * as vaccinesService from '../../../services/vaccinesService';
import EditVaccinesTable from '../EditVaccinesTable'

export default class Vaccines extends React.Component {
  constructor(props) {
    super(props);
    this.deleteVaccine = this.deleteVaccine.bind(this);
    this.state = { vaccines: undefined };
  }

  async componentDidMount() {
    await this.addNewVaccine({name: 'Sarasa', shotsCount: 3})
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
    console.log(vaccineId);
    await vaccinesService.deleteVaccine({vaccineId: vaccineId});
    await this.getCurrentVaccines();
  }

  render() {
    return (
      <EditVaccinesTable vaccines={this.state.vaccines} deleteVaccine={this.deleteVaccine} />
    );
  }
}
