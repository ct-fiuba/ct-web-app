import React, { useState } from 'react';
import { CssBaseline, Paper, Button, Typography } from '@material-ui/core';
import EstablishmentDetailsForm from '../EstablishmentDetailsForm';
import useStyles from './styles';
import * as establishmentsService from '../../../../services/establishmentsService';

export default function EditEstablishmentForm({ id, initialType, initialName, initialAddress, initialCity, initialState, initialZip, initialCountry, initialSpaces, confirmCallback }) {
  const [state, setState] = useState({
    type: initialType,
    name: initialName,
    address: initialAddress,
    city: initialCity,
    state: initialState,
    zip: initialZip,
    country: initialCountry,
    spaces: initialSpaces,
  });
  const [confirmButtonEnabled, setConfirmButtonEnabled] = useState(false);
  const classes = useStyles();

  const completeFunction = (value) => {
    setConfirmButtonEnabled(value);
  };

  const obtainInfo = (info) => {
    setState({ ...info });
  };

  const constructBody = () => {
    let body = { ...state };
    body['ownerId'] = sessionStorage.getItem('userId');
    body['_id'] = id;
    return body;
  };

  const handleConfirm = async () => {
    await establishmentsService.updateEstablishment(id, constructBody());
    await confirmCallback();
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center" className={classes.header}>
            Edición del establecimiento <b>{`${initialName}`}</b>
          </Typography>
          <React.Fragment>
            <React.Fragment>
              <EstablishmentDetailsForm initialState={{ ...state }} completeFunction={completeFunction} obtainInfo={obtainInfo} />
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleConfirm}
                  disabled={!confirmButtonEnabled}
                >
                  Confirmar
              </Button>
              </div>
            </React.Fragment>
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
