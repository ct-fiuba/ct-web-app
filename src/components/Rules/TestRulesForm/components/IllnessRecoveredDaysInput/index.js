import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import useStyles from './styles';

export default function IllnessRecoveredDaysInput({illnessRecoveredDaysValue, handleIllnessRecoveredDaysValueChange}) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={4}>
        <h4 className={classes.titleIllnessRecoveredDays}>Recuperada hace (en días)</h4>
      </Grid>
      <Grid item xs={8}>
        <TextField
          id="illnessRecoveredDaysValue"
          type="number"
          helperText="en días"
          variant="outlined"
          onChange={handleIllnessRecoveredDaysValueChange}
          value={illnessRecoveredDaysValue}
          className={classes.illnessRecoveredDaysValue}
        />
      </Grid>
    </>
  );
}
