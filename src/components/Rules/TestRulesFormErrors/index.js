import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

export default function TestRulesFormErrors({infectedTimeMissing, m2Missing, healthyTimeMissing, spaceMissing, handleCloseM2Missing, handleCloseSpaceMissing, handleCloseHealthyTimeMissing, handleCloseInfectedTimeMissing}) {
  return (
    <div>
      <Snackbar open={m2Missing} autoHideDuration={5000} onClose={handleCloseM2Missing}>
        <Alert severity="error" onClose={handleCloseM2Missing}>
          <AlertTitle>Error</AlertTitle>
          Falta definir la <strong>superficie</strong>. El valor debe ser mayor a 0.
        </Alert>
      </Snackbar>

      <Snackbar open={spaceMissing} autoHideDuration={5000} onClose={handleCloseSpaceMissing}>
        <Alert severity="error" onClose={handleCloseSpaceMissing}>
          <AlertTitle>Error</AlertTitle>
          Falta definir la <strong>ventilación</strong>.
        </Alert>
      </Snackbar>

      <Snackbar open={infectedTimeMissing} autoHideDuration={5000} onClose={handleCloseInfectedTimeMissing}>
        <Alert severity="error" onClose={handleCloseInfectedTimeMissing}>
          <AlertTitle>Error</AlertTitle>
          Error en la definición de la visita de la persona <strong>contagiada</strong>. La hora de entrada debe ser menor que la hora de salida.
        </Alert>
      </Snackbar>

      <Snackbar open={healthyTimeMissing} autoHideDuration={5000} onClose={handleCloseHealthyTimeMissing}>
        <Alert severity="error" onClose={handleCloseHealthyTimeMissing}>
          <AlertTitle>Error</AlertTitle>
          Error en la definición de la visita de la persona <strong>sana</strong>. La hora de entrada debe ser menor que la hora de salida.
        </Alert>
      </Snackbar>
    </div>
  );
}
