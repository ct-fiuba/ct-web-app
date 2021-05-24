import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import useStyles from './styles';

export default function VaccinatedDaysInput({vaccinatedDaysValue, handleVaccinatedDaysValueChange}) {
  const classes = useStyles();
  
  return (
    <>
      <Grid item xs={4}>
        <h4 className={classes.titleVaccinatedDays}>Vacuna recibida hace (en días)</h4>
      </Grid>
      <Grid item xs={8}>
        <TextField
          id="vaccinatedDaysValue"
          type="number"
          helperText="en días"
          variant="outlined"
          onChange={handleVaccinatedDaysValueChange}
          value={vaccinatedDaysValue}
          className={classes.vaccinatedDaysValue}
        />
      </Grid>
    </>
  );
}
