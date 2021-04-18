import React, { useState } from 'react';
import { Grid, FormHelperText, FormControl, Select, MenuItem, InputLabel, Button, TextField, Checkbox } from '@material-ui/core';
import AddRuleFormErrors from './components/AddRuleFormErrors';
import ContagionRiskInput from './components/ContagionRiskInput';
import DurationInput from './components/DurationInput';
import M2Input from './components/M2Input';
import SpaceInput from './components/SpaceInput';
import N95MandatoryInput from './components/N95MandatoryInput';
import VaccinatedInput from './components/VaccinatedInput';
import VaccineReceivedInput from './components/VaccineReceivedInput';
import VaccinatedDaysInput from './components/VaccinatedDaysInput';
import useStyles from './styles';

export default function AddRuleForm({addRule, handleClose}) {
  const classes = useStyles();

  const [contagionRisk, setContagionRisk] = useState('');
  const [durationCmp, setDurationCmp] = useState('');
  const [durationValue, setDurationValue] = useState('');
  const [m2Cmp, setM2Cmp] = useState('');
  const [m2Value, setM2Value] = useState('');
  const [spaceValue, setSpaceValue] = useState('');
  const [n95MandatoryValue, setN95MandatoryValue] = useState('');
  const [vaccinatedValue, setVaccinatedValue] = useState('');
  const [vaccineReceivedValue, setVaccineReceivedValue] = useState('');
  const [vaccinatedDaysValue, setVaccinatedDaysValue] = useState('');
  const [covidRecoveredValue, setCovidRecoveredValue] = useState('');
  const [covidRecoveredDaysValue, setCovidRecoveredDaysValue] = useState('');

  const [checkboxDuration, setCheckboxDuration] = useState(false);
  const [checkboxM2, setCheckboxM2] = useState(false);
  const [checkboxSpace, setCheckboxSpace] = useState(false);
  const [checkboxN95Mandatory, setCheckboxN95Mandatory] = useState(false);
  const [checkboxVaccinated, setCheckboxVaccinated] = useState(false);
  const [checkboxVaccineReceived, setCheckboxVaccineReceived] = useState(false);
  const [checkboxVaccinatedDays, setCheckboxVaccinatedDays] = useState(false);
  const [checkboxCovidRecovered, setCheckboxCovidRecovered] = useState(false);
  const [checkboxCovidRecoveredDays, setCheckboxCovidRecoveredDays] = useState(false);

  const [vaccineDetailsVisible, setVaccineDetailsVisible] = useState(false);
  const [covidRecoveredDetailsVisible, setCovidRecoveredDetailsVisible] = useState(false);

  const [durationMissing, setDurationMissing] = useState(false);
  const [m2Missing, setM2Missing] = useState(false);
  const [spaceMissing, setSpaceMissing] = useState(false);
  const [n95MandatoryMissing, setN95MandatoryMissing] = useState(false);
  const [vaccinatedMissing, setVaccinatedMissing] = useState(false);
  const [vaccineReceivedMissing, setVaccineReceivedMissing] = useState(false);
  const [vaccinatedDaysMissing, setVaccinatedDaysMissing] = useState(false);
  const [covidRecoveredMissing, setCovidRecoveredMissing] = useState(false);
  const [covidRecoveredDaysMissing, setCovidRecoveredDaysMissing] = useState(false);
  const [riskMissing, setRiskMissing] = useState(false);
  const [noCheckbox, setNoCheckbox] = useState(false);

  const handleContagionRiskChange = (event) => {
    setContagionRisk(event.target.value);
  };

  const handleDurationCmpChange = (event) => {
    setDurationCmp(event.target.value);
  };

  const handleDurationValueChange = (event) => {
    setDurationValue(event.target.value);
  }

  const handleM2CmpChange = (event) => {
    setM2Cmp(event.target.value);
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
  }

  const handleVaccineReceivedValueChange = (event) => {
    setVaccineReceivedValue(event.target.value);
  }

  const handleVaccinatedDaysValueChange = (event) => {
    setVaccinatedDaysValue(event.target.value);
  }

  const handleCovidRecoveredValueChange = (event) => {
    setCovidRecoveredValue(event.target.value);
    setCovidRecoveredDetailsVisible(event.target.value);
  }

  const handleCovidRecoveredDaysValueChange = (event) => {
    setCovidRecoveredDaysValue(event.target.value);
  }

  const handleChangeCheckboxDuration = () => {
    if (checkboxDuration) {
      setDurationCmp('');
      setDurationValue('');
    }
    setCheckboxDuration(!checkboxDuration);
  }

  const handleChangeCheckboxM2 = () => {
    if (checkboxM2) {
      setM2Cmp('');
      setM2Value('');
    }
    setCheckboxM2(!checkboxM2);
  }

  const handleChangeCheckboxSpace = () => {
    if (checkboxSpace) {
      setSpaceValue('');
    }
    setCheckboxSpace(!checkboxSpace);
  }

  const handleChangeCheckboxN95Mandatory = () => {
    if (checkboxN95Mandatory) {
      setN95MandatoryValue('');
    }
    setCheckboxN95Mandatory(!checkboxN95Mandatory);
  }

  const handleChangeCheckboxVaccinated = () => {
    if (checkboxVaccinated) {
      setVaccinatedValue('');
      setVaccineReceivedValue('');
      setVaccinatedDaysValue('');
      setVaccineDetailsVisible(false);
      setCheckboxVaccineReceived(false);
      setCheckboxVaccinatedDays(false);
    }
    setCheckboxVaccinated(!checkboxVaccinated);
  }

  const handleChangeCheckboxVaccineReceived = () => {
    if (checkboxVaccineReceived) {
      setVaccineReceivedValue('');
    }
    setCheckboxVaccineReceived(!checkboxVaccineReceived);
  }

  const handleChangeCheckboxVaccinatedDays = () => {
    if (checkboxVaccinatedDays) {
      setVaccinatedDaysValue('');
    }
    setCheckboxVaccinatedDays(!checkboxVaccinatedDays);
  }

  const handleChangeCheckboxCovidRecovered = () => {
    if (checkboxCovidRecovered) {
      setCovidRecoveredValue('');
      setCovidRecoveredDaysValue('');
      setCovidRecoveredDetailsVisible(false);
      setCheckboxCovidRecoveredDays(false);
    }
    setCheckboxCovidRecovered(!checkboxCovidRecovered);
  }

  const handleChangeCheckboxCovidRecoveredDays = () => {
    if (checkboxCovidRecoveredDays) {
      setCovidRecoveredDaysValue('');
    }
    setCheckboxCovidRecoveredDays(!checkboxCovidRecoveredDays);
  }

  const handleCloseDurationMissing = () => {
    setDurationMissing(false);
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

  const handleCloseVaccinatedDaysMissing = () => {
    setVaccinatedDaysMissing(false);
  }

  const handleCloseCovidRecoveredMissing = () => {
    setCovidRecoveredMissing(false);
  }

  const handleCloseCovidRecoveredDaysMissing = () => {
    setCovidRecoveredDaysMissing(false);
  }

  const handleCloseRiskMissing = () => {
    setRiskMissing(false);
  }

  const handleCloseNoCheckbox = () => {
    setNoCheckbox(false);
  }

  const fieldsValidation = () => {
    if (!contagionRisk) {
      setRiskMissing(true);
      return false;
    }

    if (checkboxDuration) {
      if (!durationCmp || !durationValue || durationValue <= 0) {
        setDurationMissing(true);
        return false;
      }
    }

    if (checkboxM2) {
      if (!m2Cmp || !m2Value || m2Value <= 0) {
        setM2Missing(true);
        return false;
      }
    }

    if (checkboxSpace) {
      if (!spaceValue) {
        setSpaceMissing(true);
        return false;
      }
    }

    if (checkboxN95Mandatory) {
      if (n95MandatoryValue === '') {
        setN95MandatoryMissing(true);
        return false;
      }
    }

    if (checkboxVaccinated) {
      if (vaccinatedValue === '') {
        setVaccinatedMissing(true);
        return false;
      }
    }

    if (checkboxVaccineReceived) {
      if (vaccineReceivedValue === '') {
        setVaccineReceivedMissing(true);
        return false;
      }
    }

    if (checkboxVaccinatedDays) {
      if (vaccinatedDaysValue === '' || vaccinatedDaysValue <= 0) {
        setVaccinatedDaysMissing(true);
        return false;
      }
    }

    if (checkboxCovidRecovered) {
      if (covidRecoveredValue === '') {
        setCovidRecoveredMissing(true);
        return false;
      }
    }

    if (checkboxCovidRecoveredDays) {
      if (covidRecoveredDaysValue === '' || covidRecoveredDaysValue <= 0) {
        setCovidRecoveredDaysMissing(true);
        return false;
      }
    }


    if (!checkboxDuration && !checkboxM2 && !checkboxSpace && !checkboxN95Mandatory && !checkboxVaccinated && !checkboxCovidRecovered) {
      setNoCheckbox(true);
      return false;
    }
    return true;
  }

  const createRule = () => {
    let rule = {};
    rule['contagionRisk'] = contagionRisk;
    if (checkboxDuration) {
      rule['durationCmp'] = durationCmp;
      rule['durationValue'] = durationValue;
    }

    if (checkboxM2) {
      rule['m2Cmp'] = m2Cmp;
      rule['m2Value'] = m2Value;
    }

    if (checkboxSpace) {
      rule['spaceValue'] = spaceValue;
    }

    if (checkboxN95Mandatory) {
      rule['n95Mandatory'] = n95MandatoryValue;
    }

    if (checkboxVaccinated) {
      rule['vaccinated'] = vaccinatedValue;
      if (checkboxVaccineReceived) {
        rule['vaccineReceived'] = vaccineReceivedValue;
      }
      if (checkboxVaccinatedDays) {
        rule['vaccinatedDaysAgoMin'] = vaccinatedDaysValue;
      }
    }

    if (checkboxCovidRecovered) {
      rule['covidRecovered'] = covidRecoveredValue;
      if (checkboxCovidRecoveredDays) {
        rule['covidRecoveredDaysAgoMax'] = covidRecoveredDaysValue;
      }
    }

    return rule;
  }

  const handleConfirm = () => {
    if (fieldsValidation()) {
      const rule = createRule();
      addRule(rule);
      handleClose();
    }
  }

  return (
    <Grid container>
      <ContagionRiskInput contagionRisk={contagionRisk} handleContagionRiskChange={handleContagionRiskChange}/>

      <Grid item xs={12}>
        <h4 className={classes.internalTitles}>Condiciones sobre la duración y espacio del contacto</h4>
      </Grid>

      <DurationInput checkboxDuration={checkboxDuration} handleChangeCheckboxDuration={handleChangeCheckboxDuration} durationCmp={durationCmp} handleDurationCmpChange={handleDurationCmpChange} durationValue={durationValue} handleDurationValueChange={handleDurationValueChange}/>
      <M2Input checkboxM2={checkboxM2} handleChangeCheckboxM2={handleChangeCheckboxM2} m2Cmp={m2Cmp} handleM2CmpChange={handleM2CmpChange} m2Value={m2Value} handleM2ValueChange={handleM2ValueChange}/>
      <SpaceInput checkboxSpace={checkboxSpace} handleChangeCheckboxSpace={handleChangeCheckboxSpace} spaceValue={spaceValue} handleSpaceValueChange={handleSpaceValueChange}/>
      <N95MandatoryInput checkboxN95Mandatory={checkboxN95Mandatory} handleChangeCheckboxN95Mandatory={handleChangeCheckboxN95Mandatory} n95MandatoryValue={n95MandatoryValue} handleN95MandatoryValueChange={handleN95MandatoryValueChange}/>

      <Grid item xs={12}>
        <h4 className={classes.internalTitles}>Condiciones sobre la persona involucrada en el contacto</h4>
      </Grid>

      <VaccinatedInput checkboxVaccinated={checkboxVaccinated} handleChangeCheckboxVaccinated={handleChangeCheckboxVaccinated} vaccinatedValue={vaccinatedValue} handleVaccinatedValueChange={handleVaccinatedValueChange}/>

      {
        vaccineDetailsVisible &&
        <>
          <VaccineReceivedInput checkboxVaccineReceived={checkboxVaccineReceived} handleChangeCheckboxVaccineReceived={handleChangeCheckboxVaccineReceived} vaccineReceivedValue={vaccineReceivedValue} handleVaccineReceivedValueChange={handleVaccineReceivedValueChange}/>
          <VaccinatedDaysInput checkboxVaccinatedDays={checkboxVaccinatedDays} handleChangeCheckboxVaccinatedDays={handleChangeCheckboxVaccinatedDays} vaccinatedDaysValue={vaccinatedDaysValue} handleVaccinatedDaysValueChange={handleVaccinatedDaysValueChange}/>
        </>
      }

      <Grid item xs={1}>
        <Checkbox
          className={classes.checkboxes}
          checked={checkboxCovidRecovered}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          onChange={handleChangeCheckboxCovidRecovered}
        />
      </Grid>
      <Grid item xs={3}>
        <h4 className={classes.titleCovidRecovered}>Recuperada de COVID-19</h4>
      </Grid>
      <Grid item xs={8}>
        <FormControl className={classes.formControlCovidRecoveredValue}>
          <InputLabel className={classes.labelCovidRecoveredValue}>Si o No</InputLabel>
          <Select
            labelId="covidRecoveredValue-label"
            id="covidRecoveredValue"
            value={covidRecoveredValue}
            onChange={handleCovidRecoveredValueChange}
            variant="outlined"
            disabled={!checkboxCovidRecovered}
          >
            <MenuItem value={true}>{'Si'}</MenuItem>
            <MenuItem value={false}>{'No'}</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {
        covidRecoveredDetailsVisible &&
        <>
          <Grid item xs={1}>
            <Checkbox
              className={classes.checkboxesSecondary}
              checked={checkboxCovidRecoveredDays}
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              onChange={handleChangeCheckboxCovidRecoveredDays}
            />
          </Grid>
          <Grid item xs={3}>
            <h4 className={classes.titleCovidRecoveredDays}>Recuperada hace menos de (en días)</h4>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="covidRecoveredDaysValue"
              type="number"
              helperText="en días"
              variant="outlined"
              onChange={handleCovidRecoveredDaysValueChange}
              value={covidRecoveredDaysValue}
              className={classes.covidRecoveredDaysValue}
              disabled={!checkboxCovidRecoveredDays}
            />
          </Grid>
        </>
      }

      <Grid item xs={12} className={classes.buttonsGrid}>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleConfirm} color="primary">
          Crear
        </Button>
      </Grid>

      <AddRuleFormErrors 
        durationMissing={durationMissing}
        handleCloseDurationMissing={handleCloseDurationMissing}
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
        vaccinatedDaysMissing={vaccinatedDaysMissing}
        handleCloseVaccinatedDaysMissing={handleCloseVaccinatedDaysMissing}
        covidRecoveredMissing={covidRecoveredMissing}
        handleCloseCovidRecoveredMissing={handleCloseCovidRecoveredMissing}
        covidRecoveredDaysMissing={covidRecoveredDaysMissing}
        handleCloseCovidRecoveredDaysMissing={handleCloseCovidRecoveredDaysMissing}
        riskMissing={riskMissing}
        handleCloseRiskMissing={handleCloseRiskMissing}
        noCheckbox={noCheckbox}
        handleCloseNoCheckbox={handleCloseNoCheckbox}
      />
    </Grid>
  );
}
