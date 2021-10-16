import React from 'react';
import { Grid, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import useStyles from './styles';

export default function IllnessRecoveredInput({illnessRecoveredValue, handleIllnessRecoveredValueChange}) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={4}>
        <h4 className={classes.titleIllnessRecovered}>Persona recuperada de COVID-19</h4>
      </Grid>
      <Grid item xs={8}>
        <FormControl className={classes.formControlIllnessRecoveredValue}>
          <InputLabel className={classes.labelIllnessRecoveredValue}>Si o No</InputLabel>
          <Select
            labelId="illnessRecoveredValue-label"
            id="illnessRecoveredValue"
            value={illnessRecoveredValue}
            onChange={handleIllnessRecoveredValueChange}
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
