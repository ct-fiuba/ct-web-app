import React, { useState } from 'react';
import { Grid, TextField, FormControlLabel, Checkbox, Select, MenuItem, FormControl, InputLabel, Card, CardContent } from '@material-ui/core';
import useStyles from './styles';

export default function SingleQRForm(props) {
  const classes = useStyles();
  const [state, setState] = useState(props.initialState);

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === 'hasExit') {
      value = event.target.checked;
    }
    setState({
      ...state,
      [name]: value,
    });

    props.obtainInfo(props.index, {
      ...state,
      [name]: value,
    });
  };

  return (
    <React.Fragment>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField required name="name" value={state.name} onChange={handleChange} label="Identificador del QR" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField required type="number" name="m2"  value={state.m2} onChange={handleChange} label="Metros cuadrados" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField type="number" name="estimatedVisitDuration"  value={state.estimatedVisitDuration} onChange={handleChange} label="Tiempo promedio de visita (min)" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="openPlace">Espacio abierto</InputLabel>
                <Select
                  value={state.openPlace}
                  onChange={handleChange}
                  name="openPlace"
                  inputProps={{ 'aria-label': 'openPlace' }}
                  fullWidth
                >
                  <MenuItem aria-label="None" value=""></MenuItem>
                  <MenuItem value={'no'}>No</MenuItem>
                  <MenuItem value={'yes'}>Si</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="hasExit" checked={state.hasExit} onChange={handleChange} />}
                label="Generar un QR de salida"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
