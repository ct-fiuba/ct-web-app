import React, { useState } from 'react';
import AppBar from '../../Shared/AppBar';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Button, Link, Typography } from '@material-ui/core';
import NewStoreForm from '../NewStoreForm';
import NewQRForm from '../NewQRForm';
import ConfirmationForm from '../ConfirmationForm';
import useStyles from './styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Control de Pandemias
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Checkout() {
  const [state, setState] = useState({
    firstStepInfo: {
      type: '',
      name: '',
      email: '',
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
      openPlace: '',
      n95Mandatory: false,
      hasExit: false,
    }],
  });
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [firstStepComplete, setFirstStepComplete] = useState(false);
  const [secondStepComplete, setSecondStepComplete] = useState(false);
  const steps = ['Registro del establecimiento', 'Generación de QRs', 'Confirmación'];

  const handleNext = () => {
    if (activeStep === 2) {
      sendDataToServer();
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
    body['openPlace'] = body['openPlace'] === 'no' ? false : true;
    if (body['type'] !== 'hospital') {
		  body.spaces.forEach(space => space['n95Mandatory'] = false);
    }
    return body;
  };

  const sendDataToServer = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(constructBody())
    };
    fetch(process.env.REACT_APP_USER_API_URL + '/establishments', requestOptions)
      .then(response => response.json())
      .then(data => {
        const establishment_id = data['_id'];
        window.open(process.env.REACT_APP_USER_API_URL + '/establishments/PDF/' + establishment_id, '_blank');
      })
      .catch(err => console.log('Error at fetch: ', err));
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <NewStoreForm initialState={{ ...state.firstStepInfo }} completeFunction={changeFirstStepState} obtainInfo={obtainFirstStepInfo} />;
      case 1:
        return <NewQRForm initialState={state.secondStepInfo} completeFunction={changeSecondStepState} obtainInfo={obtainSecondStepInfo} storeType={state.firstStepInfo.type}/>;
      case 2:
        return <ConfirmationForm firstStepInfo={{ ...state.firstStepInfo }} secondStepInfo={state.secondStepInfo} />;
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Generador de QRs
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
                  Gracias por generar tus códigos QR.
                </Typography>
                <Typography variant="subtitle1">
                  En breve comenzará la descarga de un archivo PDF que podrás imprimir para que sean escaneados por tus clientes.
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
        <Copyright />
      </main>
    </React.Fragment>
  );
}
