import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

export default function AddRuleFormErrors({durationMissing, m2Missing, riskMissing, spaceMissing, handleCloseM2Missing, handleCloseRiskMissing, handleCloseSpaceMissing, handleCloseDurationMissing, noCheckbox, handleCloseNoCheckbox}) {
  return (
    <div>
      <Snackbar open={durationMissing} autoHideDuration={5000} onClose={handleCloseDurationMissing}>
        <Alert severity="error" onClose={handleCloseDurationMissing}>
          <AlertTitle>Error</AlertTitle>
          Falta definir alguno de los campos de la <strong>duración</strong>. El valor debe ser mayor a 0.
        </Alert>
      </Snackbar>

      <Snackbar open={m2Missing} autoHideDuration={5000} onClose={handleCloseM2Missing}>
        <Alert severity="error" onClose={handleCloseM2Missing}>
          <AlertTitle>Error</AlertTitle>
          Falta definir alguno de los campos de la <strong>superficie</strong>. El valor debe ser mayor a 0.
        </Alert>
      </Snackbar>

      <Snackbar open={spaceMissing} autoHideDuration={5000} onClose={handleCloseSpaceMissing}>
        <Alert severity="error" onClose={handleCloseSpaceMissing}>
          <AlertTitle>Error</AlertTitle>
          Falta definir la <strong>ventilación</strong>
        </Alert>
      </Snackbar>

      <Snackbar open={riskMissing} autoHideDuration={5000} onClose={handleCloseRiskMissing}>
        <Alert severity="error" onClose={handleCloseRiskMissing}>
          <AlertTitle>Error</AlertTitle>
          Falta definir el <strong>riesgo de contagio</strong>
        </Alert>
      </Snackbar>

      <Snackbar open={noCheckbox} autoHideDuration={5000} onClose={handleCloseNoCheckbox}>
        <Alert severity="error" onClose={handleCloseNoCheckbox}>
          <AlertTitle>Error</AlertTitle>
          Es necesario definir la regla de contagio sobre <strong>al menos una condición</strong>
        </Alert>
      </Snackbar>
    </div>
  );
}
