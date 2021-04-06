import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SimulateRulesFormSlider from './SimulateRulesFormSlider';
import useStyles from '../../styles/SimulateRulesForm.style';
import * as Constants from '../../constants/SimulateRulesForm.constants';

export default function SimulateRulesForm(props) {
  const classes = useStyles();

  const [usersValue, setUsersValue] = React.useState(Constants.defaultValueUsers);
  const [infectedUsersValue, setInfectedUsersValue] = React.useState(Constants.defaultValueInfectedUsers);
  const [establishmentsValue, setEstablishmentsValue] = React.useState(Constants.defaultValueEstablishments);
  const [mobilityValue, setMobilityValue] = React.useState(Constants.defaultValueMobility);
  const [daysValue, setDaysValue] = React.useState(Constants.defaultValueDays);

  let maxValueInfectedUsers = usersValue;

  const handleUsersValueChange = (event, newValue) => {
    setUsersValue(parseInt(newValue));
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
      infectedUsers: infectedUsersValue,
      establishments: establishmentsValue,
      mobility: mobilityValue,
      days: daysValue,
    }
    props.simulateRules(config);
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
        <Button onClick={props.handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleConfirm} color="primary">
          Correr Simulación
        </Button>
      </Grid>
    </Grid>
  );
}
