import React from 'react';
import { Grid, FormControl, Select, MenuItem, InputLabel, Checkbox } from '@material-ui/core';
import useStyles from './styles';

export default function VaccineReceived({checkboxVaccineReceived, handleChangeCheckboxVaccineReceived, vaccineReceivedValue, handleVaccineReceivedValueChange}) {
  const classes = useStyles();
  
  return (
    <>
      <Grid item xs={1}>
        <Checkbox
          className={classes.checkboxesSecondary}
          checked={checkboxVaccineReceived}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          onChange={handleChangeCheckboxVaccineReceived}
        />
      </Grid>
      <Grid item xs={3}>
        <h4 className={classes.titleVaccineReceived}>Vacuna recibida</h4>
      </Grid>
      <Grid item xs={8}>
        <FormControl className={classes.formControlVaccineReceivedValue}>
          <InputLabel className={classes.labelVaccineReceivedValue}>Nombre de la vacuna</InputLabel>
          <Select
            labelId="vaccineReceivedValue-label"
            id="vaccineReceivedValue"
            value={vaccineReceivedValue}
            onChange={handleVaccineReceivedValueChange}
            variant="outlined"
            disabled={!checkboxVaccineReceived}
          >
            <MenuItem value={'Sputnik V'}>{'Sputnik V'}</MenuItem>
            <MenuItem value={'AstraZeneca'}>{'AstraZeneca'}</MenuItem>
            <MenuItem value={'Covishield'}>{'Covishield'}</MenuItem>
            <MenuItem value={'Sinopharm'}>{'Sinopharm'}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
