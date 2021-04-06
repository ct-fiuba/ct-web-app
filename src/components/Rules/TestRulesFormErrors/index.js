import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

export default function TestRulesFormErrors(props) {
  return (
    <div>
      <Snackbar open={props.m2Missing} autoHideDuration={5000} onClose={props.handleCloseM2Missing}>
        <Alert severity="error" onClose={props.handleCloseM2Missing}>
          <AlertTitle>Error</AlertTitle>
          Falta definir la <strong>superficie</strong>. El valor debe ser mayor a 0.
        </Alert>
      </Snackbar>

      <Snackbar open={props.spaceMissing} autoHideDuration={5000} onClose={props.handleCloseSpaceMissing}>
        <Alert severity="error" onClose={props.handleCloseSpaceMissing}>
          <AlertTitle>Error</AlertTitle>
          Falta definir la <strong>ventilación</strong>.
        </Alert>
      </Snackbar>

      <Snackbar open={props.infectedTimeMissing} autoHideDuration={5000} onClose={props.handleCloseInfectedTimeMissing}>
        <Alert severity="error" onClose={props.handleCloseInfectedTimeMissing}>
          <AlertTitle>Error</AlertTitle>
          Error en la definición de la visita de la persona <strong>contagiada</strong>. La hora de entrada debe ser menor que la hora de salida.
        </Alert>
      </Snackbar>

      <Snackbar open={props.healthyTimeMissing} autoHideDuration={5000} onClose={props.handleCloseHealthyTimeMissing}>
        <Alert severity="error" onClose={props.handleCloseHealthyTimeMissing}>
          <AlertTitle>Error</AlertTitle>
          Error en la definición de la visita de la persona <strong>sana</strong>. La hora de entrada debe ser menor que la hora de salida.
        </Alert>
      </Snackbar>
    </div>
  );
}
