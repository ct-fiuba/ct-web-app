import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles((theme) => ({
  buttonsGrid: {
    marginTop: '15px',
    textAlign: 'right',
  },
  titles: {
    marginTop: '5px',
    textAlign: 'center',
  },
  sliderGrids: {
    marginTop: '15px'
  },
  firstSliderGrid: {
    marginTop: '25px'
  },
  tooltipsText: {
    fontSize: '14px'
  },
  tooltips: {
    marginLeft: '5px'
  }
}));

export default function SimulateRulesForm(props) {
  const classes = useStyles();

  const defaultValueUsers = 200;
  const defaultValueInfectedUsers = defaultValueUsers / 10;
  const defaultValueEstablishments = 10;
  const defaultValueMobility = 3;
  const defaultValueDays = 60;

  const [usersValue, setUsersValue] = React.useState(defaultValueUsers);
  const [infectedUsersValue, setInfectedUsersValue] = React.useState(defaultValueInfectedUsers);
  const [establishmentsValue, setEstablishmentsValue] = React.useState(defaultValueEstablishments);
  const [mobilityValue, setMobilityValue] = React.useState(defaultValueMobility);
  const [daysValue, setDaysValue] = React.useState(defaultValueDays);

  const maxValueUsers = 500;
  let maxValueInfectedUsers = usersValue;
  const maxValueEstablishments = 50;
  const maxValueMobility = 25;
  const maxValueDays = 180;

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

  const usersMarks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: maxValueUsers,
      label: `${maxValueUsers}`,
    },
  ];

  const infectedUsersMarks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: maxValueInfectedUsers,
      label: `${maxValueInfectedUsers}`,
    },
  ];

  const establishmentsMarks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: maxValueEstablishments,
      label: `${maxValueEstablishments}`,
    },
  ];

  const mobilityMarks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: maxValueMobility,
      label: `${maxValueMobility}`,
    },
  ];

  const daysMarks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: maxValueDays,
      label: `${maxValueDays}`,
    },
  ];

  return (
    <Grid container>
      <Grid className={classes.firstSliderGrid} item xs={4}>
        <h4 className={classes.titles}>Usuarios
          <Tooltip className={classes.tooltips} placement="right" title={<span className={classes.tooltipsText}>Cantidad de usuarios en la simulación</span>}>
            <HelpIcon color="action" fontSize="small"></HelpIcon>
          </Tooltip>
        </h4>
      </Grid>
      <Grid className={classes.firstSliderGrid} item xs={8}>
        <Slider
          value={usersValue}
          aria-labelledby="discrete-slider-always"
          step={1}
          max={maxValueUsers}
          marks={usersMarks}
          onChange={handleUsersValueChange}
          valueLabelDisplay="on"
        />
      </Grid>

      <Grid className={classes.sliderGrids} item xs={4}>
        <h4 className={classes.titles}>Usuarios infectados
          <Tooltip className={classes.tooltips} placement="right" title={<span className={classes.tooltipsText}>Cantidad de usuarios que comienzan infectados</span>}>
            <HelpIcon color="action" fontSize="small"></HelpIcon>
          </Tooltip>
        </h4>
      </Grid>
      <Grid className={classes.sliderGrids} item xs={8}>
        <Slider
          value={infectedUsersValue}
          aria-labelledby="discrete-slider-always"
          step={1}
          max={maxValueInfectedUsers}
          marks={infectedUsersMarks}
          onChange={handleInfectedUsersValueChange}
          valueLabelDisplay="on"
        />
      </Grid>

      <Grid className={classes.sliderGrids} item xs={4}>
        <h4 className={classes.titles}>Establecimientos
          <Tooltip className={classes.tooltips} placement="right" title={<span className={classes.tooltipsText}>Cantidad de establecimientos en la simulación, todos con las mismas características y probabilidad de ser visitado</span>}>
            <HelpIcon color="action" fontSize="small"></HelpIcon>
          </Tooltip>
        </h4>
      </Grid>
      <Grid className={classes.sliderGrids} item xs={8}>
        <Slider
          value={establishmentsValue}
          aria-labelledby="discrete-slider-always"
          step={1}
          max={maxValueEstablishments}
          marks={establishmentsMarks}
          onChange={handleEstablishmentsValueChange}
          valueLabelDisplay="on"
        />
      </Grid>

      <Grid className={classes.sliderGrids} item xs={4}>
        <h4 className={classes.titles}>Índice de movilidad
          <Tooltip className={classes.tooltips} placement="right" title={<span className={classes.tooltipsText}>Cantidad de visitas que hace cada usuario cada día. El establecimiento visitado es aleatorio y todos tienen la misma probabilidad de ser visitados</span>}>
            <HelpIcon color="action" fontSize="small"></HelpIcon>
          </Tooltip>
        </h4>
      </Grid>
      <Grid className={classes.sliderGrids} item xs={8}>
        <Slider
          value={mobilityValue}
          aria-labelledby="discrete-slider-always"
          step={1}
          max={maxValueMobility}
          marks={mobilityMarks}
          onChange={handleMobilityValueChange}
          valueLabelDisplay="on"
        />
      </Grid>

      <Grid className={classes.sliderGrids} item xs={4}>
        <h4 className={classes.titles}>Dias a simular
          <Tooltip className={classes.tooltips} placement="right" title={<span className={classes.tooltipsText}>Cantidad de días que durará la simulación.</span>}>
            <HelpIcon color="action" fontSize="small"></HelpIcon>
          </Tooltip>
        </h4>
      </Grid>
      <Grid className={classes.sliderGrids} item xs={8}>
        <Slider
          value={daysValue}
          aria-labelledby="discrete-slider-always"
          step={1}
          max={maxValueDays}
          marks={daysMarks}
          onChange={handleDaysValueChange}
          valueLabelDisplay="on"
        />
      </Grid>

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
