import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import useStyles from './styles';

export default function M2Input({m2Value, handleM2ValueChange}) {
  const classes = useStyles();
  
  return (
    <>
      <Grid item xs={4}>
        <h4 className={classes.titleM2}>Superficie del espacio</h4>
      </Grid>
      <Grid item xs={8}>
        <TextField
          id="m2Value"
          type="number"
          helperText="en metros cuadrados (m2)"
          variant="outlined"
          value={m2Value}
          onChange={handleM2ValueChange}
          className={classes.m2Value}
        />
      </Grid>
    </>
  );
}
