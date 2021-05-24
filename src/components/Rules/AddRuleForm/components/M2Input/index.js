import React from 'react';
import { Grid, FormControl, Select, MenuItem, InputLabel, TextField, Checkbox } from '@material-ui/core';
import useStyles from './styles';

export default function M2Input({checkboxM2, handleChangeCheckboxM2, m2Cmp, handleM2CmpChange, m2Value, handleM2ValueChange}) {
  const classes = useStyles();
  
  return (
    <>
      <Grid item xs={1}>
        <Checkbox
          className={classes.checkboxes}
          checked={checkboxM2}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          onChange={handleChangeCheckboxM2}
        />
      </Grid>
      <Grid item xs={3}>
        <h4 className={classes.titleM2}>Superficie del espacio</h4>
      </Grid>
      <Grid item xs={4}>
        <FormControl className={classes.formControlM2Cmp}>
          <InputLabel className={classes.labelM2Cmp}>Mayor o Menor</InputLabel>
          <Select
            labelId="m2Cmp-label"
            id="m2Cmp"
            value={m2Cmp}
            onChange={handleM2CmpChange}
            variant="outlined"
            disabled={!checkboxM2}
          >
            <MenuItem value={'>'}>{'Mayor a'}</MenuItem>
            <MenuItem value={'<'}>{'Menor a'}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <TextField
            id="m2Value"
            type="number"
            helperText="en metros cuadrados (m2)"
            variant="outlined"
            onChange={handleM2ValueChange}
            value={m2Value}
            className={classes.m2Value}
            disabled={!checkboxM2}
          />
      </Grid>
    </>
  );
}
