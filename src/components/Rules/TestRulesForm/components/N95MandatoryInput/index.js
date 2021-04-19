import React from 'react';
import { Grid, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import useStyles from './styles';

export default function N95MandatoryInput({n95MandatoryValue, handleN95MandatoryValueChange}) {
  const classes = useStyles();
  
  return (
    <>
      <Grid item xs={4}>
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
          >
            <MenuItem value={true}>{'Si'}</MenuItem>
            <MenuItem value={false}>{'No'}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
