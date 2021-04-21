import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

export default function TestRulesFormErrors({infectedTimeMissing, m2Missing, n95MandatoryMissing, healthyTimeMissing, spaceMissing, vaccinatedMissing, vaccineReceivedMissing, vaccinatedDaysMissing, handleCloseM2Missing, handleCloseSpaceMissing, handleCloseN95MandatoryMissing, handleCloseHealthyTimeMissing, handleCloseInfectedTimeMissing, handleCloseVaccinatedMissing, handleCloseVaccineReceivedMissing, handleCloseVaccinatedDaysMissing}) {
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

      <Snackbar open={n95MandatoryMissing} autoHideDuration={5000} onClose={handleCloseN95MandatoryMissing}>
        <Alert severity="error" onClose={handleCloseN95MandatoryMissing}>
          <AlertTitle>Error</AlertTitle>
          Falta definir la obligatoriedad del uso del <strong>N95</strong>.
        </Alert>
      </Snackbar>

      <Snackbar open={vaccinatedMissing} autoHideDuration={5000} onClose={handleCloseVaccinatedMissing}>
        <Alert severity="error" onClose={handleCloseVaccinatedMissing}>
          <AlertTitle>Error</AlertTitle>
          Falta definir si la persona está <strong>vacunada</strong>.
        </Alert>
      </Snackbar>

      <Snackbar open={vaccineReceivedMissing} autoHideDuration={5000} onClose={handleCloseVaccineReceivedMissing}>
        <Alert severity="error" onClose={handleCloseVaccineReceivedMissing}>
          <AlertTitle>Error</AlertTitle>
          Falta definir la <strong>vacuna recibida</strong>
        </Alert>
      </Snackbar>

      <Snackbar open={vaccinatedDaysMissing} autoHideDuration={5000} onClose={handleCloseVaccinatedDaysMissing}>
        <Alert severity="error" onClose={handleCloseVaccinatedDaysMissing}>
          <AlertTitle>Error</AlertTitle>
          Falta definir hace <strong>cuantos días</strong> se recibió la vacuna. El valor debe ser mayor a 0.
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
