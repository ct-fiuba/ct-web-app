import React, { useState } from 'react';
import SimulateRulesForm from '../SimulateRulesForm';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import SimulateRulesResult from '../SimulateRulesResult';
import useStyles from './styles';

export default function SimulateRulesButton(props) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [simulateRuleResult, setSimulateRuleResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSimulateRuleResult(null);
    setLoading(false);
  };

  const sleep = async (milliseconds) => {
    await new Promise(r => setTimeout(r, milliseconds));
  }

  const formatAPIResponse = (config, response) => {
    // We should format the API response here!
    return {
      infected: config.infectedUsers,
      highRisk: (config.users - config.infectedUsers) * 20 / 100,
      midRisk: (config.users - config.infectedUsers) * 50 / 100,
      lowRisk: (config.users - config.infectedUsers) * 30 / 100,
    }
  }

  const simulateAPI = async (config) => {
    // We should hit an API here!
    await sleep(4000);
    setLoading(false);
    setSimulateRuleResult(formatAPIResponse(config, null));
  }

  const simulateRules = (config) => {
    setSimulateRuleResult(null);
    setLoading(true);
    simulateAPI(config);
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
            Definí los valores para simular el comportamiento de la sociedad y observá qué porcentaje de los usuarios terminaría con cada riesgo de contagio luego de un período de tiempo. Esta herramienta ayuda a editar las reglas de contagio de forma tal que representen de la forma más precisa posible a la enfermedad.
          </DialogContentText>
          <SimulateRulesForm handleClose={handleClose} simulateRules={simulateRules} />
          <SimulateRulesResult result={simulateRuleResult} loading={loading} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
