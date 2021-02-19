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
import Checkbox from '@material-ui/core/Checkbox';
import AddRuleFormErrors from './AddRuleFormErrors'

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
    textAlign: 'center',
  },
  checkboxes: {
    marginTop: '16px',
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
    textAlign: 'center',
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
    textAlign: 'center',
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
  const [checkboxDuration, setCheckboxDuration] = React.useState(true);
  const [checkboxM2, setCheckboxM2] = React.useState(true);
  const [checkboxSpace, setCheckboxSpace] = React.useState(true);

  const [durationMissing, setDurationMissing] = React.useState(false);
  const [m2Missing, setM2Missing] = React.useState(false);
  const [spaceMissing, setSpaceMissing] = React.useState(false);
  const [riskMissing, setRiskMissing] = React.useState(false);
  const [noCheckbox, setNoCheckbox] = React.useState(false);

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

  const handleChangeCheckboxDuration = () => {
    setCheckboxDuration(!checkboxDuration);
  }

  const handleChangeCheckboxM2 = () => {
    setCheckboxM2(!checkboxM2);
  }

  const handleChangeCheckboxSpace = () => {
    setCheckboxSpace(!checkboxSpace);
  }

  const handleCloseDurationMissing = () => {
    setDurationMissing(false);
  }

  const handleCloseM2Missing = () => {
    setM2Missing(false);
  }

  const handleCloseSpaceMissing = () => {
    setSpaceMissing(false);
  }

  const handleCloseRiskMissing = () => {
    setRiskMissing(false);
  }

  const handleCloseNoCheckbox = () => {
    setNoCheckbox(false);
  }

  const fieldsValidation = () => {
    if (!contagionRisk) {
      setRiskMissing(true);
      return false;
    }

    if (checkboxDuration) {
      if (!durationCmp || !durationValue || durationValue <= 0) {
        setDurationMissing(true);
        return false;
      }
    }

    if (checkboxM2) {
      if (!m2Cmp || !m2Value || m2Value <= 0) {
        setM2Missing(true);
        return false;
      }
    }

    if (checkboxSpace) {
      if (!spaceValue) {
        setSpaceMissing(true);
        return false;
      }
    }

    if (!checkboxDuration && !checkboxM2 && !checkboxSpace) {
      setNoCheckbox(true);
      return false;
    }
    return true;
  }

  const createRule = () => {
    let rule = {};
    rule['contagionRisk'] = contagionRisk;
    if (checkboxDuration) {
      rule['durationCmp'] = durationCmp;
      rule['durationValue'] = durationValue;
    }

    if (checkboxM2) {
      rule['m2Cmp'] = m2Cmp;
      rule['m2Value'] = m2Value;
    }

    if (checkboxSpace) {
      rule['spaceValue'] = spaceValue;
    }
    return rule;
  }

  const handleConfirm = () => {
    if (fieldsValidation()) {
      const rule = createRule();
      props.addRule(rule);
      props.handleClose();
    }
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



      <Grid item xs={1}>
        <Checkbox
          className={classes.checkboxes}
          checked={checkboxDuration}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          onChange={handleChangeCheckboxDuration}
        />
      </Grid>
      <Grid item xs={3}>
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
            disabled={!checkboxDuration}
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
            disabled={!checkboxDuration}
          />
      </Grid>


      <Grid item xs={1}>
        <Checkbox
          className={classes.checkboxes}
          checked={checkboxM2}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          onChange={handleChangeCheckboxM2}
        />
      </Grid>
      <Grid item xs={3}>
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
            disabled={!checkboxM2}
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
            disabled={!checkboxM2}
          />
      </Grid>


      <Grid item xs={1}>
        <Checkbox
          className={classes.checkboxes}
          checked={checkboxSpace}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          onChange={handleChangeCheckboxSpace}
        />
      </Grid>
      <Grid item xs={3}>
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
            disabled={!checkboxSpace}
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
        <Button onClick={handleConfirm} color="primary">
          Crear
        </Button>
      </Grid>

      <AddRuleFormErrors 
        durationMissing={durationMissing}
        handleCloseDurationMissing={handleCloseDurationMissing}
        m2Missing={m2Missing}
        handleCloseM2Missing={handleCloseM2Missing}
        spaceMissing={spaceMissing}
        handleCloseSpaceMissing={handleCloseSpaceMissing}
        riskMissing={riskMissing}
        handleCloseRiskMissing={handleCloseRiskMissing}
        noCheckbox={noCheckbox}
        handleCloseNoCheckbox={handleCloseNoCheckbox}
      />
    </Grid>
  );
}