import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import SimulateRulesFormSlider from '../SimulateRulesFormSlider';
import useStyles from './styles';
import * as Constants from './constants';

export default function SimulateRulesForm({simulateRules, handleClose}) {
  const classes = useStyles();

  const [usersValue, setUsersValue] = useState(Constants.defaultValueUsers);
  const [infectedUsersValue, setInfectedUsersValue] = useState(Constants.defaultValueInfectedUsers);
  const [partiallyVaccinatedUsersValue, setPartiallyVaccinatedUsersValue] = useState(0);
  const [fullyVaccinatedUsersValue, setFullyVaccinatedUsersValue] = useState(0);
  const [establishmentsValue, setEstablishmentsValue] = useState(Constants.defaultValueEstablishments);
  const [mobilityValue, setMobilityValue] = useState(Constants.defaultValueMobility);
  const [daysValue, setDaysValue] = useState(Constants.defaultValueDays);

  let maxValueInfectedUsers = usersValue;
  let maxValuePartiallyVaccinatedUsers = 100 - fullyVaccinatedUsersValue;
  let maxValueFullyVaccinatedUsers = 100 - partiallyVaccinatedUsersValue;

  const handleUsersValueChange = (event, newValue) => {
    setUsersValue(parseInt(newValue));
  }

  const handlePartiallyVaccinatedUsersValueChange = (event, newValue) => {
    setPartiallyVaccinatedUsersValue(parseInt(newValue));
  }

  const handleFullyVaccinatedUsersValueChange = (event, newValue) => {
    setFullyVaccinatedUsersValue(parseInt(newValue));
  }

  const handleInfectedUsersValueChange = (event, newValue) => {
    setInfectedUsersValue(parseInt(newValue));
  }

  const handleEstablishmentsValueChange = (event, newValue) => {
    setEstablishmentsValue(parseInt(newValue));
  }

  const handleMobilityValueChange = (event, newValue) => {
    setMobilityValue(parseInt(newValue));
  }

  const handleDaysValueChange = (event, newValue) => {
    setDaysValue(parseInt(newValue));
  }

  const handleConfirm = () => {
    const config = {
      users: usersValue,
      partiallyVaccinatedUsers: usersValue * partiallyVaccinatedUsersValue / 100,
      fullyVaccinatedUsers: usersValue * fullyVaccinatedUsersValue / 100,
      infectedUsers: infectedUsersValue,
      establishments: establishmentsValue,
      mobility: mobilityValue,
      days: daysValue,
    }
    simulateRules(config);
  }

  return (
    <Grid container>
      <SimulateRulesFormSlider 
        max={Constants.maxValueUsers}
        title={"Usuarios"}
        tooltip={"Cantidad de usuarios en la simulación."}
        value={usersValue}
        handleValueChange={handleUsersValueChange}
      />

      <SimulateRulesFormSlider 
        max={maxValuePartiallyVaccinatedUsers}
        title={"% usuarios parcialmente vacunados"}
        tooltip={"Porcentaje de usuarios que ha recibido una sola dosis. Se asumirá que la vacuna es la Sputnik V."}
        value={partiallyVaccinatedUsersValue}
        handleValueChange={handlePartiallyVaccinatedUsersValueChange}
      />

      <SimulateRulesFormSlider 
        max={maxValueFullyVaccinatedUsers}
        title={"% usuarios completamente vacunados"}
        tooltip={"Porcentaje de usuarios que ha recibido las dos dosis. Se asumirá que la vacuna es la Sputnik V."}
        value={fullyVaccinatedUsersValue}
        handleValueChange={handleFullyVaccinatedUsersValueChange}
      />

      <SimulateRulesFormSlider 
        max={maxValueInfectedUsers}
        title={"Usuarios infectados"}
        tooltip={"Cantidad de usuarios que comienzan infectados."}
        value={infectedUsersValue}
        handleValueChange={handleInfectedUsersValueChange}
      />

      <SimulateRulesFormSlider 
        max={Constants.maxValueEstablishments}
        title={"Establecimientos"}
        tooltip={"Cantidad de establecimientos en la simulación, todos con las mismas características y probabilidad de ser visitado."}
        value={establishmentsValue}
        handleValueChange={handleEstablishmentsValueChange}
      />

      <SimulateRulesFormSlider 
        max={Constants.maxValueMobility}
        title={"Índice de movilidad"}
        tooltip={"Cantidad de visitas que hace cada usuario cada día. El establecimiento visitado es aleatorio y todos tienen la misma probabilidad de ser visitados."}
        value={mobilityValue}
        handleValueChange={handleMobilityValueChange}
      />

      <SimulateRulesFormSlider 
        max={Constants.maxValueDays}
        title={"Días a simular"}
        tooltip={"Cantidad de días que durará la simulación."}
        value={daysValue}
        handleValueChange={handleDaysValueChange}
      />

      <Grid item xs={12} className={classes.buttonsGrid}>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleConfirm} color="primary">
          Correr Simulación
        </Button>
      </Grid>
    </Grid>
  );
}
