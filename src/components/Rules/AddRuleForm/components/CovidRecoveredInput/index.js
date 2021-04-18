import React from 'react';
import { Grid, FormControl, Select, MenuItem, InputLabel, Checkbox } from '@material-ui/core';
import useStyles from './styles';

export default function CovidRecoveredInput({checkboxCovidRecovered, handleChangeCheckboxCovidRecovered, covidRecoveredValue, handleCovidRecoveredValueChange}) {
  const classes = useStyles();
  
  return (
    <>
      <Grid item xs={1}>
        <Checkbox
          className={classes.checkboxes}
          checked={checkboxCovidRecovered}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          onChange={handleChangeCheckboxCovidRecovered}
        />
      </Grid>
      <Grid item xs={3}>
        <h4 className={classes.titleCovidRecovered}>Recuperada de COVID-19</h4>
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
            disabled={!checkboxCovidRecovered}
          >
            <MenuItem value={true}>{'Si'}</MenuItem>
            <MenuItem value={false}>{'No'}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
