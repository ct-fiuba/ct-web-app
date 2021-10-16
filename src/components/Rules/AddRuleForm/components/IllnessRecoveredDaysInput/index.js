import React from 'react';
import { Grid, TextField, Checkbox } from '@material-ui/core';
import useStyles from './styles';

export default function IllnessRecoveredDaysInput({checkboxIllnessRecoveredDays, handleChangeCheckboxIllnessRecoveredDays, illnessRecoveredDaysValue, handleIllnessRecoveredDaysValueChange}) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={1}>
        <Checkbox
          className={classes.checkboxesSecondary}
          checked={checkboxIllnessRecoveredDays}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          onChange={handleChangeCheckboxIllnessRecoveredDays}
        />
      </Grid>
      <Grid item xs={3}>
        <h4 className={classes.titleIllnessRecoveredDays}>Recuperada hace menos de (en días)</h4>
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
          disabled={!checkboxIllnessRecoveredDays}
        />
      </Grid>
    </>
  );
}
