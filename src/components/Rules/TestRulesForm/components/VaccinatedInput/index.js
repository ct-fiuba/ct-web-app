import React from 'react';
import { Grid, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import useStyles from './styles';

export default function Vaccinated({vaccinatedValue, handleVaccinatedValueChange}) {
  const classes = useStyles();
  
  return (
    <>
      <Grid item xs={4}>
        <h4 className={classes.titleVaccinated}>Persona vacunada</h4>
      </Grid>
      <Grid item xs={8}>
        <FormControl className={classes.formControlVaccinatedValue}>
          <InputLabel className={classes.labelVaccinatedValue}>No, parcial o completamente vacunada</InputLabel>
          <Select
            labelId="vaccinatedValue-label"
            id="vaccinatedValue"
            value={vaccinatedValue}
            onChange={handleVaccinatedValueChange}
            variant="outlined"
          >
            <MenuItem value={0}>{'No vacunada'}</MenuItem>
            <MenuItem value={1}>{'Parcialmente vacunada'}</MenuItem>
            <MenuItem value={2}>{'Completamente vacunada'}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
