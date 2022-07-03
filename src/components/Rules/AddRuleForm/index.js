import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import AddRuleFormErrors from './components/AddRuleFormErrors';
import ContagionRiskInput from './components/ContagionRiskInput';
import DurationInput from './components/DurationInput';
import M2Input from './components/M2Input';
import SpaceInput from './components/SpaceInput';
import N95MandatoryInput from './components/N95MandatoryInput';
import VaccinatedInput from './components/VaccinatedInput';
import VaccineReceivedInput from './components/VaccineReceivedInput';
import VaccinatedDaysInput from './components/VaccinatedDaysInput';
import IllnessRecoveredInput from './components/IllnessRecoveredInput';
import IllnessRecoveredDaysInput from './components/IllnessRecoveredDaysInput';
import useStyles from './styles';

export default function AddRuleForm({addRule, handleClose, vaccines, initialValues}) {
  const classes = useStyles();

  const [contagionRisk, setContagionRisk] = useState(initialValues ? initialValues.contagionRisk : '');
  const [durationCmp, setDurationCmp] = useState(initialValues && initialValues.durationCmp !== undefined ? initialValues.durationCmp : '');
  const [durationValue, setDurationValue] = useState(initialValues && initialValues.durationValue !== undefined ? initialValues.durationValue : '');
  const [m2Cmp, setM2Cmp] = useState(initialValues && initialValues.m2Cmp !== undefined ? initialValues.m2Cmp : '');
  const [m2Value, setM2Value] = useState(initialValues && initialValues.m2Value !== undefined ? initialValues.m2Value : '');
  const [openSpace, setOpenSpace] = useState(initialValues && initialValues.openSpace !== undefined ? initialValues.openSpace : '');
  const [n95MandatoryValue, setN95MandatoryValue] = useState(initialValues && initialValues.n95Mandatory !== undefined ? initialValues.n95Mandatory : '');
  const [vaccinatedValue, setVaccinatedValue] = useState(initialValues && initialValues.vaccinated !== undefined ? initialValues.vaccinated : '');
  const [vaccineReceivedValue, setVaccineReceivedValue] = useState(initialValues && initialValues.vaccineReceived !== undefined ? initialValues.vaccineReceived : '');
  const [vaccinatedDaysValue, setVaccinatedDaysValue] = useState(initialValues && initialValues.vaccinatedDaysAgoMin !== undefined ? initialValues.vaccinatedDaysAgoMin : '');
  const [illnessRecoveredValue, setIllnessRecoveredValue] = useState(initialValues && initialValues.illnessRecovered !== undefined ? initialValues.illnessRecovered : '');
  const [illnessRecoveredDaysValue, setIllnessRecoveredDaysValue] = useState(initialValues && initialValues.illnessRecoveredDaysAgoMax !== undefined ? initialValues.illnessRecoveredDaysAgoMax : '');

  const [checkboxDuration, setCheckboxDuration] = useState(initialValues && initialValues.durationCmp !== undefined);
  const [checkboxM2, setCheckboxM2] = useState(initialValues && initialValues.m2Cmp !== undefined);
  const [checkboxSpace, setCheckboxSpace] = useState(initialValues && initialValues.openSpace !== undefined);
  const [checkboxN95Mandatory, setCheckboxN95Mandatory] = useState(initialValues && initialValues.n95Mandatory !== undefined);
  const [checkboxVaccinated, setCheckboxVaccinated] = useState(initialValues && initialValues.vaccinated !== undefined);
  const [checkboxVaccineReceived, setCheckboxVaccineReceived] = useState(initialValues && initialValues.vaccineReceived !== undefined);
  const [checkboxVaccinatedDays, setCheckboxVaccinatedDays] = useState(initialValues && initialValues.vaccinatedDaysAgoMin !== undefined);
  const [checkboxIllnessRecovered, setCheckboxIllnessRecovered] = useState(initialValues && initialValues.illnessRecovered !== undefined);
  const [checkboxIllnessRecoveredDays, setCheckboxIllnessRecoveredDays] = useState(initialValues && initialValues.illnessRecoveredDaysAgoMax !== undefined);

  const [vaccineDetailsVisible, setVaccineDetailsVisible] = useState(initialValues && initialValues.vaccinated !== undefined && initialValues.vaccinated > 0);
  const [illnessRecoveredDetailsVisible, setIllnessRecoveredDetailsVisible] = useState(initialValues && initialValues.illnessRecovered);

  const [durationMissing, setDurationMissing] = useState(false);
  const [m2Missing, setM2Missing] = useState(false);
  const [spaceMissing, setSpaceMissing] = useState(false);
  const [n95MandatoryMissing, setN95MandatoryMissing] = useState(false);
  const [vaccinatedMissing, setVaccinatedMissing] = useState(false);
  const [vaccineReceivedMissing, setVaccineReceivedMissing] = useState(false);
  const [vaccinatedDaysMissing, setVaccinatedDaysMissing] = useState(false);
  const [illnessRecoveredMissing, setIllnessRecoveredMissing] = useState(false);
  const [illnessRecoveredDaysMissing, setIllnessRecoveredDaysMissing] = useState(false);
  const [riskMissing, setRiskMissing] = useState(false);
  const [noCheckbox, setNoCheckbox] = useState(false);

  const handleContagionRiskChange = (event) => {
    setContagionRisk(event.target.value);
  };

  const handleDurationCmpChange = (event) => {
    setDurationCmp(event.target.value);
  };

  const handleDurationValueChange = (event) => {
    setDurationValue(parseInt(event.target.value));
  }

  const handleM2CmpChange = (event) => {
    setM2Cmp(event.target.value);
  };

  const handleM2ValueChange = (event) => {
    setM2Value(event.target.value);
  }

  const handleOpenSpaceChange = (event) => {
    setOpenSpace(event.target.value);
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

  const handleIllnessRecoveredValueChange = (event) => {
    setIllnessRecoveredValue(event.target.value);
    setIllnessRecoveredDetailsVisible(event.target.value);
  }

  const handleIllnessRecoveredDaysValueChange = (event) => {
    setIllnessRecoveredDaysValue(event.target.value);
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
      setOpenSpace('');
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

  const handleChangeCheckboxIllnessRecovered = () => {
    if (checkboxIllnessRecovered) {
      setIllnessRecoveredValue('');
      setIllnessRecoveredDaysValue('');
      setIllnessRecoveredDetailsVisible(false);
      setCheckboxIllnessRecoveredDays(false);
    }
    setCheckboxIllnessRecovered(!checkboxIllnessRecovered);
  }

  const handleChangeCheckboxIllnessRecoveredDays = () => {
    if (checkboxIllnessRecoveredDays) {
      setIllnessRecoveredDaysValue('');
    }
    setCheckboxIllnessRecoveredDays(!checkboxIllnessRecoveredDays);
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

  const handleCloseIllnessRecoveredMissing = () => {
    setIllnessRecoveredMissing(false);
  }

  const handleCloseIllnessRecoveredDaysMissing = () => {
    setIllnessRecoveredDaysMissing(false);
  }

  const handleCloseRiskMissing = () => {
    setRiskMissing(false);
  }

  const handleCloseNoCheckbox = () => {
    setNoCheckbox(false);
  }

  const fieldsValidation = () => {
    if (contagionRisk === '') {
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
      if (openSpace === '') {
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

    if (checkboxIllnessRecovered) {
      if (illnessRecoveredValue === '') {
        setIllnessRecoveredMissing(true);
        return false;
      }
    }

    if (checkboxIllnessRecoveredDays) {
      if (illnessRecoveredDaysValue === '' || illnessRecoveredDaysValue <= 0) {
        setIllnessRecoveredDaysMissing(true);
        return false;
      }
    }


    if (!checkboxDuration && !checkboxM2 && !checkboxSpace && !checkboxN95Mandatory && !checkboxVaccinated && !checkboxIllnessRecovered) {
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
      rule['openSpace'] = openSpace;
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

    if (checkboxIllnessRecovered) {
      rule['illnessRecovered'] = illnessRecoveredValue;
      if (checkboxIllnessRecoveredDays) {
        rule['illnessRecoveredDaysAgoMax'] = illnessRecoveredDaysValue;
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
      <SpaceInput checkboxSpace={checkboxSpace} handleChangeCheckboxSpace={handleChangeCheckboxSpace} openSpace={openSpace} handleOpenSpaceChange={handleOpenSpaceChange}/>
      <N95MandatoryInput checkboxN95Mandatory={checkboxN95Mandatory} handleChangeCheckboxN95Mandatory={handleChangeCheckboxN95Mandatory} n95MandatoryValue={n95MandatoryValue} handleN95MandatoryValueChange={handleN95MandatoryValueChange}/>

      <Grid item xs={12}>
        <h4 className={classes.internalTitles}>Condiciones sobre la persona involucrada en el contacto</h4>
      </Grid>

      <VaccinatedInput maxDoses={Math.max(...(vaccines.filter(vaccine => !vaccineReceivedValue || vaccine.name === vaccineReceivedValue).map(vaccine => vaccine.shotsCount)))} checkboxVaccinated={checkboxVaccinated} handleChangeCheckboxVaccinated={handleChangeCheckboxVaccinated} vaccinatedValue={vaccinatedValue} handleVaccinatedValueChange={handleVaccinatedValueChange}/>

      {
        vaccineDetailsVisible &&
        <>
          <VaccineReceivedInput vaccines={vaccines} dosesSelected={vaccinatedValue} checkboxVaccineReceived={checkboxVaccineReceived} handleChangeCheckboxVaccineReceived={handleChangeCheckboxVaccineReceived} vaccineReceivedValue={vaccineReceivedValue} handleVaccineReceivedValueChange={handleVaccineReceivedValueChange}/>
          <VaccinatedDaysInput checkboxVaccinatedDays={checkboxVaccinatedDays} handleChangeCheckboxVaccinatedDays={handleChangeCheckboxVaccinatedDays} vaccinatedDaysValue={vaccinatedDaysValue} handleVaccinatedDaysValueChange={handleVaccinatedDaysValueChange}/>
        </>
      }

      <IllnessRecoveredInput checkboxIllnessRecovered={checkboxIllnessRecovered} handleChangeCheckboxIllnessRecovered={handleChangeCheckboxIllnessRecovered} illnessRecoveredValue={illnessRecoveredValue} handleIllnessRecoveredValueChange={handleIllnessRecoveredValueChange}/>

      {
        illnessRecoveredDetailsVisible &&
          <IllnessRecoveredDaysInput checkboxIllnessRecoveredDays={checkboxIllnessRecoveredDays} handleChangeCheckboxIllnessRecoveredDays={handleChangeCheckboxIllnessRecoveredDays} illnessRecoveredDaysValue={illnessRecoveredDaysValue} handleIllnessRecoveredDaysValueChange={handleIllnessRecoveredDaysValueChange}/>
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
        illnessRecoveredMissing={illnessRecoveredMissing}
        handleCloseIllnessRecoveredMissing={handleCloseIllnessRecoveredMissing}
        illnessRecoveredDaysMissing={illnessRecoveredDaysMissing}
        handleCloseIllnessRecoveredDaysMissing={handleCloseIllnessRecoveredDaysMissing}
        riskMissing={riskMissing}
        handleCloseRiskMissing={handleCloseRiskMissing}
        noCheckbox={noCheckbox}
        handleCloseNoCheckbox={handleCloseNoCheckbox}
      />
    </Grid>
  );
}
