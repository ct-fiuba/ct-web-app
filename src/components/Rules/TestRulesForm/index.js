import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import TestRulesFormErrors from './components/TestRulesFormErrors';
import useStyles from './styles';
import M2Input from './components/M2Input';
import SpaceInput from './components/SpaceInput';
import N95MandatoryInput from './components/N95MandatoryInput';
import TimePickersInput from './components/TimePickersInput';
import VaccinatedInput from './components/VaccinatedInput';
import VaccineReceivedInput from './components/VaccineReceivedInput';

export default function TestRulesForm({testRules, handleClose}) {
  const classes = useStyles();

  const [m2Value, setM2Value] = useState('');
  const [spaceValue, setSpaceValue] = useState('');
  const [n95MandatoryValue, setN95MandatoryValue] = useState('');
  const [vaccinatedValue, setVaccinatedValue] = useState('');
  const [vaccineReceivedValue, setVaccineReceivedValue] = useState('');
  const [vaccineDetailsVisible, setVaccineDetailsVisible] = useState(false);
  const [m2Missing, setM2Missing] = useState(false);
  const [spaceMissing, setSpaceMissing] = useState(false);
  const [n95MandatoryMissing, setN95MandatoryMissing] = useState(false);
  const [vaccinatedMissing, setVaccinatedMissing] = useState(false);
  const [vaccineReceivedMissing, setVaccineReceivedMissing] = useState(false);
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

  const handleN95MandatoryValueChange = (event) => {
    setN95MandatoryValue(event.target.value);
  }

  const handleVaccinatedValueChange = (event) => {
    setVaccinatedValue(event.target.value);
    setVaccineDetailsVisible(event.target.value > 0);
    if (event.target.value === 0) {
      setVaccineReceivedValue('');
    }
  }

  const handleVaccineReceivedValueChange = (event) => {
    setVaccineReceivedValue(event.target.value);
  }

  const handleCloseM2Missing = () => {
    setM2Missing(false);
  }

  const handleCloseSpaceMissing = () => {
    setSpaceMissing(false);
  }

  const handleCloseN95MandatoryMissing = () => {
    setN95MandatoryMissing(false);
  }

  const handleCloseVaccinatedMissing = () => {
    setVaccinatedMissing(false);
  }

  const handleCloseVaccineReceivedMissing = () => {
    setVaccineReceivedMissing(false);
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

    if (n95MandatoryValue === '') {
      setN95MandatoryMissing(true);
      return false;
    }

    if (vaccinatedValue === '') {
      setVaccinatedMissing(true);
      return false;
    }

    if (vaccinatedValue > 0 && vaccineReceivedValue === '') {
      setVaccineReceivedMissing(true);
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
      duration: calculateDuration() / 60 / 1000,
      n95Mandatory: n95MandatoryValue,
      vaccinated: vaccinatedValue,
      vaccineReceived: vaccineReceivedValue
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
      <SpaceInput spaceValue={spaceValue} handleSpaceValueChange={handleSpaceValueChange} />
      <N95MandatoryInput n95MandatoryValue={n95MandatoryValue} handleN95MandatoryValueChange={handleN95MandatoryValueChange}/>
      <TimePickersInput title={"Visita de la persona contagiada"} startDate={infectedStartDate} handleStartDateChange={handleInfectedStartDateChange} endDate={infectedEndDate} handleEndDateChange={handleInfectedEndDateChange}/>
      <TimePickersInput title={"Visita de la persona sana"} startDate={healthyStartDate} handleStartDateChange={handleHealthyStartDateChange} endDate={healthyEndDate} handleEndDateChange={handleHealthyEndDateChange}/>
      <VaccinatedInput vaccinatedValue={vaccinatedValue} handleVaccinatedValueChange={handleVaccinatedValueChange} />
      
      {
        vaccineDetailsVisible &&
          <VaccineReceivedInput vaccineReceivedValue={vaccineReceivedValue} handleVaccineReceivedValueChange={handleVaccineReceivedValueChange}/>
      }

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
        n95MandatoryMissing={n95MandatoryMissing}
        handleCloseN95MandatoryMissing={handleCloseN95MandatoryMissing}
        vaccinatedMissing={vaccinatedMissing}
        handleCloseVaccinatedMissing={handleCloseVaccinatedMissing}
        vaccineReceivedMissing={vaccineReceivedMissing}
        handleCloseVaccineReceivedMissing={handleCloseVaccineReceivedMissing}
        infectedTimeMissing={infectedTimeMissing}
        handleCloseInfectedTimeMissing={handleCloseInfectedTimeMissing}
        healthyTimeMissing={healthyTimeMissing}
        handleCloseHealthyTimeMissing={handleCloseHealthyTimeMissing}
      />
    </Grid>
  );
}
