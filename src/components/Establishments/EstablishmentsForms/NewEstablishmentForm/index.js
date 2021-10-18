import React, { useState } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core';
import EstablishmentDetailsForm from '../EstablishmentDetailsForm';
import NewSpacesForm from '../NewSpacesForm';
import ConfirmationForm from '../ConfirmationForm';
import useStyles from './styles';
import * as establishmentsService from '../../../../services/establishmentsService';

export default function NewEstablishmentForm({ confirmCallback }) {
  const [state, setState] = useState({
    firstStepInfo: {
      type: '',
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      country: '',
    },
    secondStepInfo: [{
      name: '',
      m2: '',
      estimatedVisitDuration: '',
      openSpace: '',
      n95Mandatory: false,
      hasExit: false,
    }],
  });
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [firstStepComplete, setFirstStepComplete] = useState(false);
  const [secondStepComplete, setSecondStepComplete] = useState(false);
  const steps = ['Detalles del establecimiento', 'Espacios', 'Confirmación'];

  const handleNext = async () => {
    if (activeStep === 2) {
      await establishmentsService.createNewEstablishment(constructBody());
      await confirmCallback();
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const changeFirstStepState = (value) => {
    setFirstStepComplete(value);
  };

  const obtainFirstStepInfo = (info) => {
    setState({ ...state, firstStepInfo: info });
  };

  const changeSecondStepState = (value) => {
    setSecondStepComplete(value);
  };

  const obtainSecondStepInfo = (info) => {
    setState({ ...state, secondStepInfo: info });
  };

  const isNextButtonEnabled = () => {
    if (activeStep === 0)
      return firstStepComplete;
    if (activeStep === 1)
      return secondStepComplete;
    return true;
  };

  const constructBody = () => {
    let body = { ...state.firstStepInfo, spaces: state.secondStepInfo };
    if (body['type'] !== 'hospital') {
      body.spaces.forEach(space => space['n95Mandatory'] = false);
    }
    body['ownerId'] = sessionStorage.getItem('userId');
    return body;
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <EstablishmentDetailsForm initialState={{ ...state.firstStepInfo }} completeFunction={changeFirstStepState} obtainInfo={obtainFirstStepInfo} />;
      case 1:
        return <NewSpacesForm initialState={state.secondStepInfo} completeFunction={changeSecondStepState} obtainInfo={obtainSecondStepInfo} storeType={state.firstStepInfo.type} />;
      case 2:
        return <ConfirmationForm firstStepInfo={{ ...state.firstStepInfo }} secondStepInfo={state.secondStepInfo} />;
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Registro de nuevo establecimiento
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Gracias por registrar tu establecimiento.
                </Typography>
                <Typography variant="subtitle1">
                  En breve comenzará la descarga de un archivo PDF con tus QRs que podrás imprimir para que sean escaneados por tus clientes.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Atrás
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    disabled={!isNextButtonEnabled()}
                  >
                    {activeStep === steps.length - 1 ? 'Confirmar' : 'Siguiente'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
