import React from 'react';
import EstablishmentsContainer from '../EstablishmentsContainer'
import AppBar from '../../Shared/AppBar';
import * as establishmentsService from '../../../services/establishmentsService';

export default class MyEstablishments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { establishments: [] };
  }

  async componentDidMount() {
    await this.getCurrentEstablishments();
  }

  async getCurrentEstablishments() {
    const establishments = await establishmentsService.getEstablishments();
    this.setState({ establishments: establishments });
  }

  render() {
    return (
      <div>
        <AppBar loggedIn={true} />
        <EstablishmentsContainer
          establishments={this.state.establishments}
        />
      </div>
    );
  }
}
