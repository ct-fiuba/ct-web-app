import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import useStyles from './styles';

export default function CovidRecoveredDaysInput({covidRecoveredDaysValue, handleCovidRecoveredDaysValueChange}) {
  const classes = useStyles();
  
  return (
    <>
      <Grid item xs={4}>
        <h4 className={classes.titleCovidRecoveredDays}>Recuperada hace (en días)</h4>
      </Grid>
      <Grid item xs={8}>
        <TextField
          id="covidRecoveredDaysValue"
          type="number"
          helperText="en días"
          variant="outlined"
          onChange={handleCovidRecoveredDaysValueChange}
          value={covidRecoveredDaysValue}
          className={classes.covidRecoveredDaysValue}
        />
      </Grid>
    </>
  );
}
