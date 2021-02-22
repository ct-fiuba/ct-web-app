import React from 'react';
import SimulateRulesForm from './SimulateRulesForm';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TestRulesResult from './TestRulesResult';

const useStyles = makeStyles((theme) => ({
  simulateRulesButton: {
    fontWeight: 'bold',
    width: '-webkit-fill-available',
    marginLeft: '5px',
    marginRight: '5px',
  },
  dialogTitle: {
    marginTop: '40px',
    marginLeft: '40px',
    marginRight: '40px',
  },
  dialogContent: {
    marginBottom: '40px',
    marginLeft: '40px',
    marginRight: '40px',
  },
}));

export default function SimulateRulesButton(props) {
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

  const simulateRules = (env) => {
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
      <Button className={classes.simulateRulesButton} variant="outlined" color="primary" onClick={handleClickOpen}>
        Simular reglas
      </Button>
      <Dialog maxWidth={'md'} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.dialogTitle} id="form-dialog-title">Correr simulación de las reglas de contagio</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <DialogContentText>
            Defini los valores para simular el comportamiento de la sociedad y entender qué porcentaje de los usuarios terminaría con cada riesgo de contagio luego de un período de tiempo, para poder editar las reglas de contagio tal que representen de la forma más precisa posible a la enfermedad.
          </DialogContentText>
          <SimulateRulesForm handleClose={handleClose} simulateRules={simulateRules} />
          <TestRulesResult rule={testRuleResult} notMatch={notMatch} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
