import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  formControlContagionRisk: {
    margin: theme.spacing(4),
    width: '400px',
  },
  labelContagionRisk: {
    marginLeft: '10px',
  },
  gridContagionRisk: {
    textAlign: 'center',
  },
  optionsContagionRisk: {
    justifyContent: 'center',
  },
  buttonsGrid: {
    textAlign: 'right',
  },
  titleDuration: {
    marginTop: '28px',
  },
  durationValue: {
    marginTop: '8px',
    width: '-webkit-fill-available',
  },
  formControlDurationCmp: {
    margin: theme.spacing(1),
    width: '-webkit-fill-available',
  },
  labelDurationCmp: {
    marginLeft: '10px',
  },
  titleM2: {
    marginTop: '28px',
  },
  m2Value: {
    marginTop: '8px',
    width: '-webkit-fill-available',
  },
  formControlM2Cmp: {
    margin: theme.spacing(1),
    width: '-webkit-fill-available',
  },
  labelM2Cmp: {
    marginLeft: '10px',
  },
  titleSpace: {
    marginTop: '28px',
  },
  formControlSpaceValue: {
    margin: theme.spacing(1),
    marginRight: '0px',
    width: '-webkit-fill-available',
  },
  labelSpaceValue: {
    marginLeft: '10px',
  }
}));

export default function AddRuleForm(props) {
  const classes = useStyles();

  const [contagionRisk, setContagionRisk] = React.useState('');
  const [durationCmp, setDurationCmp] = React.useState('');
  const [durationValue, setDurationValue] = React.useState('');
  const [m2Cmp, setM2Cmp] = React.useState('');
  const [m2Value, setM2Value] = React.useState('');
  const [spaceValue, setSpaceValue] = React.useState('');

  const handleContagionRiskChange = (event) => {
    setContagionRisk(event.target.value);
  };

  const handleDurationCmpChange = (event) => {
    setDurationCmp(event.target.value);
  };

  const handleDurationValueChange = (event) => {
    setDurationValue(event.target.value);
  }

  const handleM2CmpChange = (event) => {
    setM2Cmp(event.target.value);
  };

  const handleM2ValueChange = (event) => {
    setM2Value(event.target.value);
  }

  const handleSpaceValueChange = (event) => {
    setSpaceValue(event.target.value);
  }

  return (
    <Grid container>
      <Grid item xs={12} className={classes.gridContagionRisk}>
        <FormControl className={classes.formControlContagionRisk}>
          <InputLabel className={classes.labelContagionRisk} id="contagion-risk-helper-label">Riesgo de contagio</InputLabel>
          <Select
            labelId="contagion-risk-label"
            id="contagion-risk"
            value={contagionRisk}
            onChange={handleContagionRiskChange}
            variant="outlined"
          >
            <MenuItem className={classes.optionsContagionRisk} value={'Alto'}>Alto</MenuItem>
            <MenuItem className={classes.optionsContagionRisk} value={'Medio'}>Medio</MenuItem>
            <MenuItem className={classes.optionsContagionRisk} value={'Bajo'}>Bajo</MenuItem>
          </Select>
          <FormHelperText>Riesgo asociado a la regla</FormHelperText>
        </FormControl>
      </Grid>



      <Grid item xs={4}>
        <h4 className={classes.titleDuration}>Duración del contacto</h4>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.formControlDurationCmp}>
          <InputLabel className={classes.labelDurationCmp}>Mayor o Menor</InputLabel>
          <Select
            labelId="durationCmp-label"
            id="durationCmp"
            value={durationCmp}
            onChange={handleDurationCmpChange}
            variant="outlined"
          >
            <MenuItem value={'>'}>{'Mayor a'}</MenuItem>
            <MenuItem value={'<'}>{'Menor a'}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <TextField
            id="durationValue"
            type="number"
            helperText="en minutos"
            variant="outlined"
            onChange={handleDurationValueChange}
            className={classes.durationValue}
          />
      </Grid>


      <Grid item xs={4}>
        <h4 className={classes.titleM2}>Superficie del espacio</h4>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.formControlM2Cmp}>
          <InputLabel className={classes.labelM2Cmp}>Mayor o Menor</InputLabel>
          <Select
            labelId="m2Cmp-label"
            id="m2Cmp"
            value={m2Cmp}
            onChange={handleM2CmpChange}
            variant="outlined"
          >
            <MenuItem value={'>'}>{'Mayor a'}</MenuItem>
            <MenuItem value={'<'}>{'Menor a'}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <TextField
            id="m2Value"
            type="number"
            helperText="en metros cuadrados (m2)"
            variant="outlined"
            onChange={handleM2ValueChange}
            className={classes.m2Value}
          />
      </Grid>



      <Grid item xs={4}>
        <h4 className={classes.titleSpace}>Ventilación del espacio</h4>
      </Grid>
      <Grid item xs={8}>
        <FormControl className={classes.formControlSpaceValue}>
          <InputLabel className={classes.labelSpaceValue}>Abierto o Cerrado</InputLabel>
          <Select
            labelId="spaceValue-label"
            id="spaceValue"
            value={spaceValue}
            onChange={handleSpaceValueChange}
            variant="outlined"
          >
            <MenuItem value={'Abierto'}>{'Abierto'}</MenuItem>
            <MenuItem value={'Cerrado'}>{'Cerrado'}</MenuItem>
          </Select>
        </FormControl>
      </Grid>



      <Grid item xs={12} className={classes.buttonsGrid}>
        <Button onClick={props.handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={props.handleConfirm} color="primary">
          Crear
        </Button>
      </Grid>
    </Grid>
  );
}
