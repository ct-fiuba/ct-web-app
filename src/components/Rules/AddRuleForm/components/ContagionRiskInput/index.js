import React from 'react';
import { Grid, FormHelperText, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import useStyles from './styles';

export default function ContagionRiskInput({contagionRisk, handleContagionRiskChange}) {
  const classes = useStyles();

  return (
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
          <MenuItem className={classes.optionsContagionRisk} value={0}>Alto</MenuItem>
          <MenuItem className={classes.optionsContagionRisk} value={1}>Medio</MenuItem>
          <MenuItem className={classes.optionsContagionRisk} value={2}>Bajo</MenuItem>
        </Select>
        <FormHelperText>Riesgo asociado a la regla</FormHelperText>
      </FormControl>
    </Grid>
  );
}
