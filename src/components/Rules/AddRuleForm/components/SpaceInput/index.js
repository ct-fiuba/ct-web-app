import React from 'react';
import { Grid, FormControl, Select, MenuItem, InputLabel, Checkbox } from '@material-ui/core';
import useStyles from './styles';

export default function SpaceInput({checkboxSpace, handleChangeCheckboxSpace, spaceValue, handleSpaceValueChange}) {
  const classes = useStyles();
  
  return (
    <>
      <Grid item xs={1}>
        <Checkbox
          className={classes.checkboxes}
          checked={checkboxSpace}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          onChange={handleChangeCheckboxSpace}
        />
      </Grid>
      <Grid item xs={3}>
        <h4 className={classes.titleSpace}>Ventilación del espacio</h4>
      </Grid>
      <Grid item xs={8}>
        <FormControl className={classes.formControlSpaceValue}>
          <InputLabel className={classes.labelSpaceValue}>Abierto o Cerrado</InputLabel>
          <Select
            labelId="spaceValue-label"
            id="spaceValue"
            value={spaceValue}
            onChange={handleSpaceValueChange}
            variant="outlined"
            disabled={!checkboxSpace}
          >
            <MenuItem value={'Abierto'}>{'Abierto'}</MenuItem>
            <MenuItem value={'Cerrado'}>{'Cerrado'}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
