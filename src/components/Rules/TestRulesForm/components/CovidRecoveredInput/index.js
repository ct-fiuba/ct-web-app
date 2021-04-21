import React from 'react';
import { Grid, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import useStyles from './styles';

export default function CovidRecoveredInput({covidRecoveredValue, handleCovidRecoveredValueChange}) {
  const classes = useStyles();
  
  return (
    <>
      <Grid item xs={4}>
        <h4 className={classes.titleCovidRecovered}>Persona recuperada de COVID-19</h4>
      </Grid>
      <Grid item xs={8}>
        <FormControl className={classes.formControlCovidRecoveredValue}>
          <InputLabel className={classes.labelCovidRecoveredValue}>Si o No</InputLabel>
          <Select
            labelId="covidRecoveredValue-label"
            id="covidRecoveredValue"
            value={covidRecoveredValue}
            onChange={handleCovidRecoveredValueChange}
            variant="outlined"
          >
            <MenuItem value={true}>{'Si'}</MenuItem>
            <MenuItem value={false}>{'No'}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
