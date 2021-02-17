import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TestRulesFormErrors from './TestRulesFormErrors'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  buttonsGrid: {
    marginTop: '15px',
    textAlign: 'right',
  },
  durationValue: {
    marginTop: '8px',
    width: '-webkit-fill-available',
  },
  titleM2: {
    marginTop: '28px',
    textAlign: 'center',
  },
  m2Value: {
    marginTop: '8px',
    marginLeft: '8px',
    width: '-webkit-fill-available',
  },
  titleSpace: {
    marginTop: '28px',
    textAlign: 'center',
  },
  formControlSpaceValue: {
    margin: theme.spacing(1),
    marginRight: '0px',
    width: '-webkit-fill-available',
  },
  labelSpaceValue: {
    marginLeft: '10px',
  },
  timePickers: {
    width: '-webkit-fill-available',
  },
  timePickersGrid: {
    paddingLeft: '12px',
    paddingRight: '8px',
  }
}));

export default function TestRulesForm(props) {
  const classes = useStyles();

  const [contagionRisk, setContagionRisk] = React.useState('');
  const [durationCmp, setDurationCmp] = React.useState('');
  const [durationValue, setDurationValue] = React.useState('');
  const [m2Cmp, setM2Cmp] = React.useState('');
  const [m2Value, setM2Value] = React.useState('');
  const [spaceValue, setSpaceValue] = React.useState('');
  const [checkboxDuration, setCheckboxDuration] = React.useState(true);
  const [checkboxM2, setCheckboxM2] = React.useState(true);
  const [checkboxSpace, setCheckboxSpace] = React.useState(true);

  const [m2Missing, setM2Missing] = React.useState(false);
  const [spaceMissing, setSpaceMissing] = React.useState(false);
  const [infectedTimeMissing, setInfectedTimeMissing] = React.useState(false);
  const [healthyTimeMissing, setHealthyTimeMissing] = React.useState(false);
  const [infectedStartDate, setInfectedStartDate] = React.useState(new Date('2014-08-18T14:00:00'));
  const [infectedEndDate, setInfectedEndDate] = React.useState(new Date('2014-08-18T14:30:00'));
  const [healthyStartDate, setHealthyStartDate] = React.useState(new Date('2014-08-18T14:10:00'));
  const [healthyEndDate, setHealthyEndDate] = React.useState(new Date('2014-08-18T14:50:00'));

  const handleInfectedStartDateChange = (date) => {
    setInfectedStartDate(date);
  };

  const handleInfectedEndDateChange = (date) => {
    setInfectedEndDate(date);
  };

  const handleHealthyStartDateChange = (date) => {
    setHealthyStartDate(date);
  };

  const handleHealthyEndDateChange = (date) => {
    setHealthyEndDate(date);
  };

  const handleM2ValueChange = (event) => {
    setM2Value(event.target.value);
  }

  const handleSpaceValueChange = (event) => {
    setSpaceValue(event.target.value);
  }

  const handleCloseM2Missing = () => {
    setM2Missing(false);
  }

  const handleCloseSpaceMissing = () => {
    setSpaceMissing(false);
  }

  const handleCloseInfectedTimeMissing = () => {
    setInfectedTimeMissing(false);
  }

  const handleCloseHealthyTimeMissing = () => {
    setHealthyTimeMissing(false);
  }

  const fieldsValidation = () => {
    if (!m2Value || m2Value <= 0) {
      setM2Missing(true);
      return false;
    }

    if (!spaceValue) {
      setSpaceMissing(true);
      return false;
    }

    if (infectedEndDate - infectedStartDate <= 0) {
      setInfectedTimeMissing(true);
      return false;
    }

    if (healthyEndDate - healthyStartDate <= 0) {
      setHealthyTimeMissing(true);
      return false;
    }
    return true;
  }

  const handleConfirm = () => {
    if (fieldsValidation()) {
      props.handleClose();
    }
  }

  return (
    <Grid container>
      <Grid item xs={4}>
        <h4 className={classes.titleM2}>Superficie del espacio</h4>
      </Grid>
      <Grid item xs={8}>
        <TextField
          id="m2Value"
          type="number"
          helperText="en metros cuadrados (m2)"
          variant="outlined"
          onChange={handleM2ValueChange}
          className={classes.m2Value}
          disabled={!checkboxM2}
        />
      </Grid>


      <Grid item xs={4}>
        <h4 className={classes.titleSpace}>Ventilación del espacio</h4>
      </Grid>
      <Grid item xs={8}>
        <FormControl className={classes.formControlSpaceValue}>
          <InputLabel className={classes.labelSpaceValue}>Abierto o Cerrado</InputLabel>
          <Select
            labelId="spaceValue-label"
            id="spaceValue"
            value={spaceValue}
            onChange={handleSpaceValueChange}
            variant="outlined"
            disabled={!checkboxSpace}
          >
            <MenuItem value={'Abierto'}>{'Abierto'}</MenuItem>
            <MenuItem value={'Cerrado'}>{'Cerrado'}</MenuItem>
          </Select>
        </FormControl>
      </Grid>


      <Grid item xs={4}>
        <h4 className={classes.titleSpace}>Visita de la persona contagiada</h4>
      </Grid>
      <Grid item xs={4} className={classes.timePickersGrid}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Entrada"
            value={infectedStartDate}
            onChange={handleInfectedStartDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
            className={classes.timePickers}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={4} className={classes.timePickersGrid}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Salida"
            value={infectedEndDate}
            onChange={handleInfectedEndDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
            className={classes.timePickers}
          />
        </MuiPickersUtilsProvider>
      </Grid>


      <Grid item xs={4}>
        <h4 className={classes.titleSpace}>Visita de la persona sana</h4>
      </Grid>
      <Grid item xs={4} className={classes.timePickersGrid}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Entrada"
            value={healthyStartDate}
            onChange={handleHealthyStartDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
            className={classes.timePickers}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={4} className={classes.timePickersGrid}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Salida"
            value={healthyEndDate}
            onChange={handleHealthyEndDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
            className={classes.timePickers}
          />
        </MuiPickersUtilsProvider>
      </Grid>


      <Grid item xs={12} className={classes.buttonsGrid}>
        <Button onClick={props.handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleConfirm} color="primary">
          Correr Prueba
        </Button>
      </Grid>

      <TestRulesFormErrors
        m2Missing={m2Missing}
        handleCloseM2Missing={handleCloseM2Missing}
        spaceMissing={spaceMissing}
        handleCloseSpaceMissing={handleCloseSpaceMissing}
        infectedTimeMissing={infectedTimeMissing}
        handleCloseInfectedTimeMissing={handleCloseInfectedTimeMissing}
        healthyTimeMissing={healthyTimeMissing}
        handleCloseHealthyTimeMissing={handleCloseHealthyTimeMissing}
      />
    </Grid>
  );
}
