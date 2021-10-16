import React from 'react';
import { Grid, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core';
import useStyles from './styles';

export default function SpaceInput({openSpace, handleOpenSpaceChange}) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={4}>
        <h4 className={classes.titleSpace}>Ventilación del espacio</h4>
      </Grid>
      <Grid item xs={8}>
        <FormControl className={classes.formControlOpenSpace}>
          <InputLabel className={classes.labelOpenSpace}>Abierto o Cerrado</InputLabel>
          <Select
            labelId="openSpace-label"
            id="openSpace"
            value={openSpace}
            onChange={handleOpenSpaceChange}
            variant="outlined"
          >
            <MenuItem value={true}>{'Abierto'}</MenuItem>
            <MenuItem value={false}>{'Cerrado'}</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
}
