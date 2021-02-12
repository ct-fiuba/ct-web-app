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
  formControl: {
    margin: theme.spacing(1),
    width: '165px',
  },
  buttonsGrid: {
    textAlign: 'right',
  },
  titleDuration: {
    marginTop: '28px',
  },
  durationValue: {
    marginTop: '8px',
  },
  formControlDurationCmp: {
    margin: theme.spacing(1),
    width: '165px',
  },
  labelDurationCmp: {
    marginLeft: '10px',
  },
  titleM2: {
    marginTop: '28px',
  },
  m2Value: {
    marginTop: '8px',
  },
  formControlM2Cmp: {
    margin: theme.spacing(1),
    width: '165px',
  },
  labelM2Cmp: {
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

  return (
    <Grid container>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <InputLabel id="contagion-risk-helper-label">Riesgo de contagio</InputLabel>
          <Select
            labelId="contagion-risk-label"
            id="contagion-risk"
            value={contagionRisk}
            onChange={handleContagionRiskChange}
          >
            <MenuItem value={'Alto'}>Alto</MenuItem>
            <MenuItem value={'Medio'}>Medio</MenuItem>
            <MenuItem value={'Bajo'}>Bajo</MenuItem>
          </Select>
          <FormHelperText>Riesgo asociado a la regla</FormHelperText>
        </FormControl>
      </Grid>



      <Grid item xs={4}>
        <h4 className={classes.titleDuration}>Duración del contacto</h4>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.formControlDurationCmp}>
          <InputLabel className={classes.labelDurationCmp}>Menor o Mayor</InputLabel>
          <Select
            labelId="durationCmp-label"
            id="durationCmp"
            value={durationCmp}
            onChange={handleDurationCmpChange}
            variant="outlined"
          >
            <MenuItem value={'<'}>{'Menor a'}</MenuItem>
            <MenuItem value={'>'}>{'Mayor a'}</MenuItem>
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
          <InputLabel className={classes.labelM2Cmp}>Menor o Mayor</InputLabel>
          <Select
            labelId="m2Cmp-label"
            id="m2Cmp"
            value={m2Cmp}
            onChange={handleM2CmpChange}
            variant="outlined"
          >
            <MenuItem value={'<'}>{'Menor a'}</MenuItem>
            <MenuItem value={'>'}>{'Mayor a'}</MenuItem>
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
