import React from 'react';
import { Grid, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import useStyles from './styles';

export default function Vaccinated({maxDoses = 0, vaccinatedValue, handleVaccinatedValueChange}) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={4}>
        <h4 className={classes.titleVaccinated}>Dosis recibidas</h4>
      </Grid>
      <Grid item xs={8}>
        <FormControl className={classes.formControlVaccinatedValue}>
          <InputLabel className={classes.labelVaccinatedValue}>Cantidad de dosis</InputLabel>
          <Select
            labelId="vaccinatedValue-label"
            id="vaccinatedValue"
            value={vaccinatedValue}
            onChange={handleVaccinatedValueChange}
            variant="outlined"
          >
            {Array.from(Array(maxDoses + 1).keys()).map(doses => <MenuItem value={doses}>{doses}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
