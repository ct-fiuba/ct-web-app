import React, { useState, useEffect } from 'react';
import { Grid, TextField, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

export default function EstablishmentDetailsForm({ initialState, obtainInfo, completeFunction }) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    checkCompleteness();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const allFieldsCompleted = (new_state) => {
    return (new_state &&
      new_state.type !== '' &&
      new_state.name !== '' &&
      new_state.address !== '' &&
      new_state.city !== '' &&
      new_state.state !== '' &&
      new_state.zip !== '' &&
      new_state.country !== '');
  }

  const handleChangeType = (event) => {
    updateFieldsAndCheck('type', event.target.value);
  };

  const handleChangeName = (event) => {
    updateFieldsAndCheck('name', event.target.value);
  };

  const handleChangeAddress = (event) => {
    updateFieldsAndCheck('address', event.target.value);
  };

  const handleChangeCity = (event) => {
    updateFieldsAndCheck('city', event.target.value);
  };

  const handleChangeState = (event) => {
    updateFieldsAndCheck('state', event.target.value);
  };

  const handleChangeZip = (event) => {
    updateFieldsAndCheck('zip', event.target.value);
  };

  const handleChangeCountry = (event) => {
    updateFieldsAndCheck('country', event.target.value);
  };

  const updateFieldsAndCheck = (field, value) => {
    const new_state = { ...state, [field]: value };
    setState(new_state);
    if (allFieldsCompleted(new_state)) {
      obtainInfo(new_state);
    }
  }

  const checkCompleteness = () => {
    completeFunction(allFieldsCompleted(state));
  }

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel htmlFor="type">Tipo de establecimiento</InputLabel>
            <Select
              value={state.type}
              onChange={handleChangeType}
              inputProps={{ 'aria-label': 'type' }}
              fullWidth
            >
              <MenuItem aria-label="None" value=""></MenuItem>
              <MenuItem value={'hospital'}>Hospital</MenuItem>
              <MenuItem value={'food'}>Gastronómico</MenuItem>
              <MenuItem value={'supermarket'}>Supermercado</MenuItem>
              <MenuItem value={'clothing'}>Venta de Ropa</MenuItem>
              <MenuItem value={'transportation'}>Transporte</MenuItem>
              <MenuItem value={'other'}>Otros</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Nombre del establecimiento"
            autoComplete="off"
            value={state.name}
            onChange={handleChangeName}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="Dirección"
            autoComplete="off"
            fullWidth
            value={state.address}
            onChange={handleChangeAddress}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Ciudad"
            autoComplete="off"
            fullWidth
            value={state.city}
            onChange={handleChangeCity}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Provincia"
            autoComplete="off"
            value={state.state}
            onChange={handleChangeState}
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Código postal"
            autoComplete="off"
            fullWidth
            value={state.zip}
            onChange={handleChangeZip}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="País"
            autoComplete="off"
            fullWidth
            value={state.country}
            onChange={handleChangeCountry}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
