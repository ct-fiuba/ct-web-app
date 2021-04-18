import React from 'react';
import { Grid, FormControl, Select, MenuItem, InputLabel, Checkbox } from '@material-ui/core';
import useStyles from './styles';

export default function N95MandatoryInput({checkboxN95Mandatory, handleChangeCheckboxN95Mandatory, n95MandatoryValue, handleN95MandatoryValueChange}) {
  const classes = useStyles();
  
  return (
    <>
      <Grid item xs={1}>
        <Checkbox
          className={classes.checkboxes}
          checked={checkboxN95Mandatory}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          onChange={handleChangeCheckboxN95Mandatory}
        />
      </Grid>
      <Grid item xs={3}>
        <h4 className={classes.titleN95Mandatory}>Uso de N95 obligatorio</h4>
      </Grid>
      <Grid item xs={8}>
        <FormControl className={classes.formControlN95MandatoryValue}>
          <InputLabel className={classes.labelN95MandatoryValue}>Si o No</InputLabel>
          <Select
            labelId="n95MandatoryValue-label"
            id="n95MandatoryValue"
            value={n95MandatoryValue}
            onChange={handleN95MandatoryValueChange}
            variant="outlined"
            disabled={!checkboxN95Mandatory}
          >
            <MenuItem value={true}>{'Si'}</MenuItem>
            <MenuItem value={false}>{'No'}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
