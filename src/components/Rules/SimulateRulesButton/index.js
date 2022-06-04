import React, { useState } from 'react';
import SimulateRulesForm from '../SimulateRulesForm';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton} from '@material-ui/core';
import CloseIcon from "@material-ui/icons/Close"
import SimulateRulesResult from '../SimulateRulesResult';
import useStyles from './styles';
import { simulate } from '../../../services/simulatorService';

export default function SimulateRulesButton({rules, onImport}) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [simulateRuleResult, setSimulateRuleResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [rawResult, setRawResult] = useState(null);
  const [currentConfig, setConfig] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSimulateRuleResult(null);
    setLoading(false);
  };

  const formatAPIResponse = (response) => {
    // We should format the API response here!
    const lastDay = response[response.length - 1]
    return {
      overall: {
        infected: lastDay.infected,
        highRisk: lastDay.high,
        midRisk: lastDay.mid,
        lowRisk: lastDay.low,
      },
      chart: {
        data: response,
        xDataKey: 'day',
        yDataKeys: ["infected", "high", "mid", "low"],
        colors: ["#cca9dd", "#ff5252", "#ffdb44", "#b5ffcf"]
      }
      
    }
  }

  const simulateAPI = async (config) => {
    const response = await simulate(config, rules);
    if (!response.error) {
      setLoading(false);
      setRawResult(response)
      setConfig(config);
      setSimulateRuleResult(formatAPIResponse(response));
    } else {
      setLoading(false);
      alert("Hubo un problema con la simulación.")
    }
    
  }

  const simulateRules = (config) => {
    setSimulateRuleResult(null);
    setLoading(true);
    simulateAPI(config);
  }

  const onDownload = () => {
    const link = document.createElement("a");
    const date = Date.now();
    link.download = `resultado_${date}.json`;
    link.href =`data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify({rules: rules, result: rawResult, config: currentConfig})
    )}`;
    link.click();
  };


  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      const fileRaw = e.target.result
      const fileContent = JSON.parse(fileRaw)
      setConfig(fileContent.config)
      onImport(fileContent.rules)
      setRawResult(fileContent.result)
      setSimulateRuleResult(formatAPIResponse(fileContent.result)) 
    }
  }

  return (
    <div>
      <Button className={classes.simulateRulesButton} variant="outlined" color="primary" onClick={handleClickOpen}>
        Simular reglas
      </Button>
      <Dialog fullScreen maxWidth={'xl'} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle disableTypography id="form-dialog-title" className={classes.dialogTitle}>
          <h2>Correr simulación de las reglas de contagio</h2>
          <div>
            <Button
              variant="contained"
              component="label"
            >
              Importar Resultado
              <input
                type="file"
                hidden
                onChange={handleChange}
              />
            </Button>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <DialogContentText>
            Definí los valores para simular el comportamiento de la sociedad y observá qué porcentaje de los usuarios terminaría con cada riesgo de contagio luego de un período de tiempo. Esta herramienta ayuda a editar las reglas de contagio de forma tal que representen de la forma más precisa posible a la enfermedad.
          </DialogContentText>
          <SimulateRulesForm handleClose={handleClose} simulateRules={simulateRules} />
          <SimulateRulesResult result={simulateRuleResult} loading={loading} onDownload={onDownload} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
