import React, { useState } from 'react';
import TestRulesForm from '../TestRulesForm';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import TestRulesResult from '../TestRulesForm/components/TestRulesResult';
import useStyles from './styles';

export default function TestRulesButton({rules}) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [testRuleResult, setTestRuleResult] = useState(null);
  const [notMatch, setNotMatch] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTestRuleResult(null);
    setNotMatch(false);
  };

  const evaluateRule = (env, rule) => {
    let duration = true;
    let m2 = true;
    let space = true;
    let n95Mandatory = true;
    let vaccinated = true;
    let vaccineReceived = true;
    let vaccinatedDays = true;
    let covidRecovered = true;
    let covidRecoveredDays = true;

    if (rule.hasOwnProperty('durationValue')) {
      if (rule.durationCmp === '<') {
        duration = parseInt(env.duration) <= parseInt(rule.durationValue);
      } else {
        duration = parseInt(env.duration) >= parseInt(rule.durationValue);
      }
    }

    if (rule.hasOwnProperty('m2Value')) {
      if (rule.m2Cmp === '<') {
        m2 = parseInt(env.m2) <= parseInt(rule.m2Value);
      } else {
        m2 = parseInt(env.m2) >= parseInt(rule.m2Value);
      }
    }

    if (rule.hasOwnProperty('spaceValue')) {
      space = env.space === rule.spaceValue;
    }

    if (rule.hasOwnProperty('n95Mandatory')) {
      n95Mandatory = env.n95Mandatory === rule.n95Mandatory;
    }

    if (rule.hasOwnProperty('vaccinated')) {
      vaccinated = env.vaccinated === rule.vaccinated;
    }

    if (rule.hasOwnProperty('vaccineReceived')) {
      vaccineReceived = env.vaccineReceived === rule.vaccineReceived;
    }

    if (rule.hasOwnProperty('vaccinatedDaysAgoMin')) {
      vaccinatedDays = parseInt(env.vaccinatedDays) >= parseInt(rule.vaccinatedDaysAgoMin);
    }

    if (rule.hasOwnProperty('covidRecovered')) {
      covidRecovered = env.covidRecovered === rule.covidRecovered;
    }

    if (rule.hasOwnProperty('covidRecoveredDaysAgoMax')) {
      covidRecoveredDays = parseInt(env.covidRecoveredDays) <= parseInt(rule.covidRecoveredDaysAgoMax);
    }

    return duration && m2 && space && n95Mandatory && vaccinated && vaccineReceived && vaccinatedDays && covidRecovered && covidRecoveredDays;
  }

  const testRules = (env) => {
    setTestRuleResult(null);
    setNotMatch(false);
    if (!env) return;
    rules.sort((r1, r2) => { return r1.index < r2.index ? -1 : 1 });
    for (let rule of rules) {
      const result = evaluateRule(env, rule);
      if (result) {
        setTestRuleResult(rule);
        setNotMatch(false);
        return;
      }
    }
    setTestRuleResult(null);
    setNotMatch(true);
  }

  return (
    <div>
      <Button className={classes.testRulesButton} variant="outlined" color="primary" onClick={handleClickOpen}>
        Probar reglas
      </Button>
      <Dialog maxWidth={'md'} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.dialogTitle} id="form-dialog-title">Probar reglas de contagio</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <DialogContentText>
            Ingrese las características de un espacio, los horarios de entrada y salida de una persona contagiada, los de una persona sana, y si ésta está vacunada o recuperada de COVID-19. Presioná en "Correr Prueba" para validar con qué regla coincidirá ese contacto y qué riesgo tendra la persona sana.
          </DialogContentText>
          <TestRulesForm handleClose={handleClose} testRules={testRules} />
          <TestRulesResult rule={testRuleResult} notMatch={notMatch} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
