import React from 'react';
import TestRulesForm from '../TestRulesForm';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TestRulesResult from '../TestRulesResult';
import useStyles from './styles';

export default function TestRulesButton(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [testRuleResult, setTestRuleResult] = React.useState(null);
  const [notMatch, setNotMatch] = React.useState(false);

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

    return duration && m2 && space;
  }

  const testRules = (env) => {
    setTestRuleResult(null);
    setNotMatch(false);
    if (!env) return;
    props.rules.sort((r1, r2) => { return r1.index < r2.index ? -1 : 1 });
    for (let rule of props.rules) {
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
            Ingrese las características de un espacio, los horarios de entrada y salida de una persona contagiada, y los de una persona sana. Presioná en "Correr Prueba" para validar con qué regla coincidirá ese contacto y qué riesgo tendra la persona sana.
          </DialogContentText>
          <TestRulesForm handleClose={handleClose} testRules={testRules} />
          <TestRulesResult rule={testRuleResult} notMatch={notMatch} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
