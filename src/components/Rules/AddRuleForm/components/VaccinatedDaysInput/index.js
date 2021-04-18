import React from 'react';
import { Grid, TextField, Checkbox } from '@material-ui/core';
import useStyles from './styles';

export default function VaccinatedDaysInput({checkboxVaccinatedDays, handleChangeCheckboxVaccinatedDays, vaccinatedDaysValue, handleVaccinatedDaysValueChange}) {
  const classes = useStyles();
  
  return (
    <>
      <Grid item xs={1}>
        <Checkbox
          className={classes.checkboxesSecondary}
          checked={checkboxVaccinatedDays}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          onChange={handleChangeCheckboxVaccinatedDays}
        />
      </Grid>
      <Grid item xs={3}>
        <h4 className={classes.titleVaccinatedDays}>Vacuna recibida hace más de (en días)</h4>
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
          disabled={!checkboxVaccinatedDays}
        />
      </Grid>
    </>
  );
}
