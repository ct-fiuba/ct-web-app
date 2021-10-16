import React, { useState } from 'react';
import { CssBaseline, Paper, Button, Typography } from '@material-ui/core';
import useStyles from './styles';
import * as establishmentsService from '../../../../services/establishmentsService';
import NewSingleSpaceForm from '../NewSingleSpaceForm';

export default function EditSpaceForm({ spaceId, establishmentId, establishmentType, initialName, initialM2, initialEstimatedVisitDuration, initialOpenSpace, initialN95Mandatory, initialHasExit, confirmCallback }) {
  const [state, setState] = useState({
    name: initialName,
    m2: initialM2,
    estimatedVisitDuration: initialEstimatedVisitDuration,
    openSpace: initialOpenSpace,
    n95Mandatory: initialN95Mandatory,
    hasExit: initialHasExit,
  });
  const [confirmButtonEnabled, setConfirmButtonEnabled] = useState(true);
  const classes = useStyles();

	const allFieldsCompleted = (space) => {
		return (space.name !== '' &&
			space.m2 !== '' &&
			space.openSpace !== '');
	}

  const obtainInfo = (_index, info) => {
    setState({ ...info });
    setConfirmButtonEnabled(allFieldsCompleted({ ...info }));
  };

  const constructBody = () => {
    let body = { ...state, establishmentId: establishmentId };
    return body;
  };

  const handleConfirm = async () => {
    await establishmentsService.updateSpace(spaceId, constructBody());
    await confirmCallback();
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center" className={classes.header}>
            Edición del espacio <b>{`${initialName}`}</b>
          </Typography>
          <React.Fragment>
            <React.Fragment>
              <NewSingleSpaceForm initialState={{ ...state }} obtainInfo={obtainInfo} storeType={establishmentType} />
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
