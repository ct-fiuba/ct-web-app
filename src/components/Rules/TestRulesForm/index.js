import React, { useState } from 'react';
import { Grid, FormControl, Select, MenuItem, InputLabel, Button } from '@material-ui/core';
import TestRulesFormErrors from './components/TestRulesFormErrors';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import useStyles from './styles';
import M2Input from './components/M2Input';

export default function TestRulesForm({testRules, handleClose}) {
  const classes = useStyles();

  const [m2Value, setM2Value] = useState('');
  const [spaceValue, setSpaceValue] = useState('');
  const [m2Missing, setM2Missing] = useState(false);
  const [spaceMissing, setSpaceMissing] = useState(false);
  const [infectedTimeMissing, setInfectedTimeMissing] = useState(false);
  const [healthyTimeMissing, setHealthyTimeMissing] = useState(false);
  const [infectedStartDate, setInfectedStartDate] = useState(new Date('2014-08-18T14:00:00'));
  const [infectedEndDate, setInfectedEndDate] = useState(new Date('2014-08-18T14:30:00'));
  const [healthyStartDate, setHealthyStartDate] = useState(new Date('2014-08-18T14:10:00'));
  const [healthyEndDate, setHealthyEndDate] = useState(new Date('2014-08-18T14:50:00'));

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

  const calculateDuration = () => {
    // no overlap
    if (infectedEndDate < healthyStartDate || infectedStartDate > healthyEndDate) {
      return 0;
    }

    const minEndDate = healthyEndDate < infectedEndDate ? healthyEndDate : infectedEndDate;
    const maxStartDate = healthyStartDate < infectedStartDate ? infectedStartDate : healthyStartDate;

    return minEndDate - maxStartDate;
  }

  const buildTestEnv = () => {
    return {
      space: spaceValue,
      m2: m2Value,
      duration: calculateDuration() / 60 / 1000
    }
  }

  const handleConfirm = () => {
    if (fieldsValidation()) {
      testRules(buildTestEnv());
    } else {
      testRules(null);
    }
  }

  return (
    <Grid container>
      <M2Input m2Value={m2Value} handleM2ValueChange={handleM2ValueChange} />


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
            id="infectedStartDate"
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
            id="infectedEndDate"
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
            id="healthyStartDate"
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
            id="healthyEndDate"
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
        <Button onClick={handleClose} color="primary">
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
