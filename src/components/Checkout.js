import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import NewStoreForm from './NewStoreForm';
import NewQRForm from './NewQRForm';
import ConfirmationForm from './ConfirmationForm';

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

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function Checkout() {
	const [state, setState] = React.useState({
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
    openPlace: '',
    hasExit: false,
  }],
  });
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [firstStepComplete, setFirstStepComplete] = React.useState(false);
  const [secondStepComplete, setSecondStepComplete] = React.useState(false);
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
    setState({...state, firstStepInfo: info});
  };

  const changeSecondStepState = (value) => {
    setSecondStepComplete(value);
  };

  const obtainSecondStepInfo = (info) => {
    setState({...state, secondStepInfo: info});
  };

  const isNextButtonEnabled = () => {
    if (activeStep === 0)
      return firstStepComplete;
    if (activeStep === 1)
      return secondStepComplete;
    return true;
  };

  const constructBody = () => {
    let body = {...state.firstStepInfo, spaces: state.secondStepInfo};
    body['openPlace'] = body['openPlace'] === 'no' ? false : true;
    console.log(body);
    return body;
  };

  const sendDataToServer = () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(constructBody())
    };
    fetch('http://localhost:5005/establishments', requestOptions)
        .then(response => response.json())
        .then(data => {
          const establishment_id = data['_id'];
          window.open("http://localhost:5005/establishments/PDF/" + establishment_id, "_blank")
        });
  };

	const getStepContent = (step) => {
		switch (step) {
			case 0:
				return <NewStoreForm initialState={{...state.firstStepInfo}} completeFunction={changeFirstStepState} obtainInfo={obtainFirstStepInfo} />;
			case 1:
				return <NewQRForm initialState={state.secondStepInfo} completeFunction={changeSecondStepState} obtainInfo={obtainSecondStepInfo} />;
			case 2:
				  return <ConfirmationForm firstStepInfo={{...state.firstStepInfo}} secondStepInfo={state.secondStepInfo}/>;
			default:
				throw new Error('Unknown step');
		}
	};

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Control de Pandemias
          </Typography>
        </Toolbar>
      </AppBar>
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
