import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';

export default function AddRuleFormErrors(props) {
  return (
    <div>
      <Snackbar open={props.durationMissing} autoHideDuration={5000} onClose={props.handleCloseDurationMissing}>
        <Alert severity="error" onClose={props.handleCloseDurationMissing}>
          <AlertTitle>Error</AlertTitle>
          Falta definir alguno de los campos de la <strong>duración</strong>. El valor debe ser mayor a 0.
        </Alert>
      </Snackbar>

      <Snackbar open={props.m2Missing} autoHideDuration={5000} onClose={props.handleCloseM2Missing}>
        <Alert severity="error" onClose={props.handleCloseM2Missing}>
          <AlertTitle>Error</AlertTitle>
          Falta definir alguno de los campos de la <strong>superficie</strong>. El valor debe ser mayor a 0.
        </Alert>
      </Snackbar>

      <Snackbar open={props.spaceMissing} autoHideDuration={5000} onClose={props.handleCloseSpaceMissing}>
        <Alert severity="error" onClose={props.handleCloseSpaceMissing}>
          <AlertTitle>Error</AlertTitle>
          Falta definir la <strong>ventilación</strong>
        </Alert>
      </Snackbar>

      <Snackbar open={props.riskMissing} autoHideDuration={5000} onClose={props.handleCloseRiskMissing}>
        <Alert severity="error" onClose={props.handleCloseRiskMissing}>
          <AlertTitle>Error</AlertTitle>
          Falta definir el <strong>riesgo de contagio</strong>
        </Alert>
      </Snackbar>

      <Snackbar open={props.noCheckbox} autoHideDuration={5000} onClose={props.handleCloseNoCheckbox}>
        <Alert severity="error" onClose={props.handleCloseNoCheckbox}>
          <AlertTitle>Error</AlertTitle>
          Es necesario definir la regla de contagio sobre <strong>al menos una condición</strong>
        </Alert>
      </Snackbar>
    </div>
  );
}
