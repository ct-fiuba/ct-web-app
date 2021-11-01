import React from 'react';
import { Grid, FormControl, Select, MenuItem, InputLabel, Checkbox } from '@material-ui/core';
import useStyles from './styles';

export default function Vaccinated({checkboxVaccinated, handleChangeCheckboxVaccinated, vaccinatedValue, handleVaccinatedValueChange}) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={1}>
        <Checkbox
          className={classes.checkboxes}
          checked={checkboxVaccinated}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          onChange={handleChangeCheckboxVaccinated}
        />
      </Grid>
      <Grid item xs={3}>
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
            disabled={!checkboxVaccinated}
          >
            <MenuItem value={0}>{0}</MenuItem>
            <MenuItem value={1}>{1}</MenuItem>
            <MenuItem value={2}>{2}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
