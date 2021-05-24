import React from 'react';
import { Grid, TextField, Checkbox } from '@material-ui/core';
import useStyles from './styles';

export default function CovidRecoveredDaysInput({checkboxCovidRecoveredDays, handleChangeCheckboxCovidRecoveredDays, covidRecoveredDaysValue, handleCovidRecoveredDaysValueChange}) {
  const classes = useStyles();
  
  return (
    <>
      <Grid item xs={1}>
        <Checkbox
          className={classes.checkboxesSecondary}
          checked={checkboxCovidRecoveredDays}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          onChange={handleChangeCheckboxCovidRecoveredDays}
        />
      </Grid>
      <Grid item xs={3}>
        <h4 className={classes.titleCovidRecoveredDays}>Recuperada hace menos de (en días)</h4>
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
          disabled={!checkboxCovidRecoveredDays}
        />
      </Grid>
    </>
  );
}
