import React, { useState } from 'react';
import { Grid, Button, Accordion, AccordionSummary, AccordionDetails, Typography, Tooltip, TextField } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpIcon from '@material-ui/icons/Help';
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
  const [expandedAdvanced, setAdvanced] = useState(false);

  const [seed, setSeed] = useState(null);

  let maxValueInfectedUsers = usersValue;
  let maxValuePartiallyVaccinatedUsers = 100 - fullyVaccinatedUsersValue;
  let maxValueFullyVaccinatedUsers = 100 - partiallyVaccinatedUsersValue;

  const handleUsersValueChange = (event, newValue) => {
    setUsersValue(parseInt(newValue));
  }

  const handleSeedValueChange = (event) => {
    setSeed(parseInt(event.target.value));
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
      ...seed && { seed }
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
        tooltip={"Cantidad de establecimientos que suele visitar un usuario ('favoritos'). Durante la simulacion estos establecimientos tienen la misma probabilidad de ser visitados."}
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

      
      <Grid item xs={12}>

        <Accordion expanded={expandedAdvanced} onChange={() => setAdvanced(!expandedAdvanced)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="advanced-content"
            id="advanced-settings"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Configuracion Avanzada
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
            <Grid className={classes.firstSliderGrid} item xs={6}>
              <h4 className={classes.titles}>Semilla
                <Tooltip className={classes.tooltips} placement="right" title={<span className={classes.tooltipsText}>Para la repetibilidad entre corridas</span>}>
                  <HelpIcon color="action" fontSize="small"></HelpIcon>
                </Tooltip>
              </h4>
            </Grid>
            <Grid className={classes.firstSliderGrid} item xs={6}>
            <TextField
                id="seed"
                type="number"
                //helperText="para la repetibilidad"
                variant="outlined"
                onChange={handleSeedValueChange}
                value={seed}
              />
            </Grid>
            </>
          
          
          </AccordionDetails>
        </Accordion>

      </Grid>
      

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
