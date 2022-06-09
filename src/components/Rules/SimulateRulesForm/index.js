import React, { useState } from 'react';
import { Grid, Button, Accordion, AccordionSummary, AccordionDetails, Typography, Tooltip, TextField, Box } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpIcon from '@material-ui/icons/Help';
import SimulateRulesFormSlider from '../SimulateRulesFormSlider';
import useStyles from './styles';
import * as Constants from './constants';

export default function SimulateRulesForm({simulateRules, handleClose, initConfig={}}) {
  const classes = useStyles();

  const [usersValue, setUsersValue] = useState(initConfig.users || Constants.defaultValueUsers);
  const [infectedUsersValue, setInfectedUsersValue] = useState(initConfig.infectedUsers ? initConfig.infectedUsers * 100 : Constants.defaultValueInfectedUsers);
  const [partiallyVaccinatedUsersValue, setPartiallyVaccinatedUsersValue] = useState(initConfig.partiallyVaccinated ? initConfig.partiallyVaccinated * 100 :  0);
  const [fullyVaccinatedUsersValue, setFullyVaccinatedUsersValue] = useState(initConfig.fullyVaccinated ? initConfig.fullyVaccinated * 100 :  0);
  const [establishmentsValue, setEstablishmentsValue] = useState(initConfig.establishments || Constants.defaultValueEstablishments);

  const [mobFreqValue, setMobFreqValue] = useState(initConfig.mobility?.frequency || Constants.defaultValueFreq);
  const [mobVarValue, setMobVarValue] = useState(initConfig.mobility?.variability || Constants.defaultValueVar);

  const [daysValue, setDaysValue] = useState(initConfig.days || Constants.defaultValueDays);
  const [infectedDaysValue, setInfectedDaysValue] = useState(initConfig.infectedDays || Constants.defaultInfectedValueDays);
  const [incubationDaysValue, setIncubationDaysValue] = useState(initConfig.incubationDays || Constants.defaultIncubationValueDays);
  const [expandedAdvanced, setAdvanced] = useState(false);

  const [seed, setSeed] = useState(initConfig.seed || null);
  const [lockdownRestriction, setLockdownRestriction] = useState(initConfig.lockdownRestriction || Constants.defaultLockdownRestrictionDays);

  React.useEffect(() => {
		setUsersValue(initConfig.users)
    setInfectedUsersValue(initConfig.infectedUsers*100)
    setPartiallyVaccinatedUsersValue(initConfig.partiallyVaccinated * 100)
    setFullyVaccinatedUsersValue(initConfig.fullyVaccinated * 100)
    setEstablishmentsValue(initConfig.establishments)

    setMobFreqValue(initConfig.mobility?.frequency)
    setMobVarValue(initConfig.mobility?.variability)

    setDaysValue(initConfig.days)
    setInfectedDaysValue(initConfig.infectedDays)
    setIncubationDaysValue(initConfig.incubationDays)
    setLockdownRestriction(initConfig.lockdownRestriction)

    setSeed(initConfig.seed)

    setAdvanced(true)

	}, [initConfig])

  let maxValuePartiallyVaccinatedUsers = 100 - fullyVaccinatedUsersValue;
  let maxValueFullyVaccinatedUsers = 100 - partiallyVaccinatedUsersValue;

  const handleUsersValueChange = (event, newValue) => {
    setUsersValue(parseInt(newValue));
  }

  const handleSeedValueChange = (event) => {
    setSeed(parseInt(event.target.value));
  }

  const handleLockdownRestrictionValueChange = (event, newValue) => {
    setLockdownRestriction(parseInt(newValue));
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

  const handleMobVarValueChange = (event, newValue) => {
    setMobVarValue(parseInt(newValue));
  }

  const handleMobFreqValueChange = (event, newValue) => {
    setMobFreqValue(parseInt(newValue));
  }

  const handleDaysValueChange = (event, newValue) => {
    setDaysValue(parseInt(newValue));
  }

  const handleDaysInfectedValueChange = (event, newValue) => {
    setInfectedDaysValue(parseInt(newValue));
  }

  const handleDaysIncubationValueChange = (event, newValue) => {
    setIncubationDaysValue(parseInt(newValue));
  }

  const handleConfirm = () => {
    const config = {
      users: usersValue,
      partiallyVaccinated: partiallyVaccinatedUsersValue / 100,
      fullyVaccinated: fullyVaccinatedUsersValue / 100,
      infectedUsers: infectedUsersValue / 100,
      infectedDays: infectedDaysValue,
      incubationDays: incubationDaysValue,
      establishments: establishmentsValue,
      mobility: {
        frequency: mobFreqValue,
        variability: mobVarValue
      },
      days: daysValue,
      ...seed && { seed },
      ...lockdownRestriction && {lockdownRestriction},
    }
    simulateRules(config);
  }

  return (
    <>
    <Grid container>
      <SimulateRulesFormSlider 
        max={Constants.maxValueUsers}
        title={"Usuarios"}
        tooltip={"Cantidad de usuarios en la simulación."}
        value={usersValue}
        handleValueChange={handleUsersValueChange}
      />

      <SimulateRulesFormSlider 
        max={100}
        title={"% usuarios infectados"}
        tooltip={"Porcentaje de usuarios que comienzan infectados."}
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
        max={Constants.maxValueDays}
        title={"Días a simular"}
        tooltip={"Cantidad de días que durará la simulación."}
        value={daysValue}
        handleValueChange={handleDaysValueChange}
      />

      <SimulateRulesFormSlider 
        max={daysValue}
        title={"Duración del virus"}
        tooltip={"Cantidad de días que una persona es contagiosa."}
        value={infectedDaysValue}
        handleValueChange={handleDaysInfectedValueChange}
      />

      <Grid item xs={12}>
        <h4 className={classes.mobility}>Movilidad:</h4>

      </Grid>

      <SimulateRulesFormSlider 
        max={establishmentsValue}
        title={"Variabilidad"}
        tooltip={"Cantidad de establecimientos que suele visitar un usuario ('favoritos'). Durante la simulacion estos establecimientos tienen la misma probabilidad de ser visitados."}
        value={mobVarValue}
        handleValueChange={handleMobVarValueChange}
      />

      <SimulateRulesFormSlider 
        max={Constants.maxValueMobility}
        title={"Frecuencia"}
        tooltip={"Cantidad máxima de salidas que realiza un usuario en un dia."}
        value={mobFreqValue}
        handleValueChange={handleMobFreqValueChange}
      />
    </Grid>
    <Grid item xs={24}>

    <Accordion expanded={expandedAdvanced} onChange={() => setAdvanced(!expandedAdvanced)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="advanced-content"
        id="advanced-settings"
      >
        <Box className={classes.accordion}>

          <Typography className={classes.accordionTitle}>
            Configuracion Avanzada
          </Typography>

          <Typography className={classes.accordionSubtitle}>Definí parametros no obligatorios para tener mayor control del contexto de la simulación.</Typography>

        </Box>
        
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
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
            max={daysValue}
            title={"Duracion de restriccion por riesgo alto"}
            tooltip="Cantidad de dias que una persona debe aislarse al ser detectada como riesgo alto."
            value={lockdownRestriction}
            handleValueChange={handleLockdownRestrictionValueChange}
          />

          <SimulateRulesFormSlider 
            max={daysValue}
            title={"Periodo de incubación del virus"}
            tooltip="Cantidad de dias hasta que una persona empieza a desarrollar sintomas."
            value={incubationDaysValue}
            handleValueChange={handleDaysIncubationValueChange}
          />

        
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
              variant="outlined"
              onChange={handleSeedValueChange}
              value={seed}
            />
          </Grid>
          
        </Grid>
      </AccordionDetails>
    </Accordion>

    <Grid item xs={12} className={classes.buttonsGrid}>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleConfirm} color="primary">
          Correr Simulación
        </Button>
      </Grid>

  </Grid>
  </>
  );
}
