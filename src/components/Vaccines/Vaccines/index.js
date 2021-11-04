import React from 'react';
import * as vaccinesService from '../../../services/vaccinesService';
import EditVaccinesTable from '../EditVaccinesTable';
import AddVaccineButton from '../AddVaccineButton';
import { Grid } from '@material-ui/core';

export default class Vaccines extends React.Component {
  constructor(props) {
    super(props);
    this.deleteVaccine = this.deleteVaccine.bind(this);
    this.addNewVaccine = this.addNewVaccine.bind(this);
    this.state = { vaccines: this.props.vaccines };
  }

  componentDidUpdate(prevProps) {
    if (this.props.vaccines !== prevProps.vaccines) {
      this.setState({ vaccines: this.props.vaccines })
    }
  }

  async getCurrentVaccines() {
    await this.props.getCurrentVaccines();
  }

  async addNewVaccine(vaccineInfo) {
    this.setState({ vaccines: undefined });
    await vaccinesService.addNewVaccine(vaccineInfo);
    await this.getCurrentVaccines();
  }

  async deleteVaccine(vaccineId) {
    this.setState({ vaccines: undefined });
    await vaccinesService.deleteVaccine(vaccineId);
    await this.getCurrentVaccines();
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <EditVaccinesTable vaccines={this.state.vaccines} deleteVaccine={this.deleteVaccine} />
        </Grid>
        <Grid item xs={9} />
        <Grid item xs={3}>
          <AddVaccineButton addVaccine={this.addNewVaccine} />
        </Grid>
      </Grid>
    );
  }
}
