import React from 'react';
import { Grid, FormControl, Select, MenuItem, InputLabel, Checkbox } from '@material-ui/core';
import useStyles from './styles';

export default function IllnessRecoveredInput({checkboxIllnessRecovered, handleChangeCheckboxIllnessRecovered, illnessRecoveredValue, handleIllnessRecoveredValueChange}) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={1}>
        <Checkbox
          className={classes.checkboxes}
          checked={checkboxIllnessRecovered}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          onChange={handleChangeCheckboxIllnessRecovered}
        />
      </Grid>
      <Grid item xs={3}>
        <h4 className={classes.titleIllnessRecovered}>Recuperada de COVID-19</h4>
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
            disabled={!checkboxIllnessRecovered}
          >
            <MenuItem value={true}>{'Si'}</MenuItem>
            <MenuItem value={false}>{'No'}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
