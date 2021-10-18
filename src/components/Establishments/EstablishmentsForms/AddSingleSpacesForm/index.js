import React, { useState } from 'react';
import { CssBaseline, Paper, Button, Typography } from '@material-ui/core';
import NewSpacesForm from '../NewSpacesForm';
import useStyles from './styles';
import * as establishmentsService from '../../../../services/establishmentsService';

export default function AddSingleSpacesForm({ establishmentId, type, name, confirmCallback }) {
  const [spaces, setSpaces] = useState([{
    name: '',
    m2: '',
    estimatedVisitDuration: '',
    openSpace: '',
    n95Mandatory: false,
    hasExit: false,
  }]);
  const [confirmButtonEnabled, setConfirmButtonEnabled] = useState(false);
  const classes = useStyles();

  const completeFunction = (value) => {
    setConfirmButtonEnabled(value);
  };

  const obtainInfo = (info) => {
    setSpaces(info);
  };

  const constructBody = () => {
    let body = Object.values(spaces);
    body.forEach(x => {
      x['ownerId'] = sessionStorage.getItem('userId');
      x['establishmentId'] = establishmentId;
    })
    return body;
  };

  const handleConfirm = async () => {
    const body = constructBody();
    let generatedResponse = []
    await Promise.all(body.map(async (spaceInfo) => {
      try {
        let insertResponse = await establishmentsService.addSingleSpace(spaceInfo);
        generatedResponse.push(insertResponse)
      } catch (error) {
        console.log('error'+ error);
      }
    }));
    await confirmCallback();
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center" className={classes.header}>
            {`Crear espacios para ${name}`}
          </Typography>
          <React.Fragment>
            <React.Fragment>
              <NewSpacesForm initialState={spaces} completeFunction={completeFunction} obtainInfo={obtainInfo} storeType={type} />
              <Button
                variant="contained"
                color="primary"
                onClick={handleConfirm}
                className={classes.buttons}
                disabled={!confirmButtonEnabled}
              >
                Confirmar
              </Button>
            </React.Fragment>
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
