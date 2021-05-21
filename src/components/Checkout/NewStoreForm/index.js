import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, Select, MenuItem, FormControl, InputLabel} from '@material-ui/core';

export default function NewStoreForm({initialState, obtainInfo, completeFunction}) {
  useEffect(() => {
    checkCompleteness();
  });

	const [state, setState] = useState(initialState);

	const allFieldsCompleted = () => {
		return (state.type !== '' &&
			state.name !== '' &&
			state.email !== '' && /\S+@\S+\.\S+/.test(state.email) &&
			state.address !== '' &&
			state.city !== '' &&
			state.state !== '' &&
			state.zip !== '' &&
			state.country !== '');
	}

  const handleChange = (event) => {
    const name = event.target.name;
		setState({
      ...state,
      [name]: event.target.value,
    });

		if (allFieldsCompleted()) {
			obtainInfo({
				...state,
				[name]: event.target.value,
			});
		}
  };

	const checkCompleteness = () => {
		completeFunction(allFieldsCompleted());
	}

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Registro de nuevo local
      </Typography>
      <Grid container spacing={3}>
			  <Grid item xs={12}>
					<FormControl fullWidth>
						<InputLabel htmlFor="type">Tipo de establecimiento</InputLabel>
						<Select
							value={state.type}
							onChange={handleChange}
							name="type"
							id="type"
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
            id="name"
            name="name"
            label="Nombre del establecimiento"
						value={state.name}
						onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
						type="email"
            label="Email de contacto"
            fullWidth
            autoComplete="email"
						value={state.email}
						onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Dirección"
            fullWidth
            autoComplete="shipping address-line1"
						value={state.address}
						onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Ciudad"
            fullWidth
            autoComplete="shipping address-level2"
						value={state.city}
						onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="state" name="state" label="Provincia" value={state.state} autoComplete="shipping address-level2" onChange={handleChange} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Código postal"
            fullWidth
            autoComplete="shipping postal-code"
						value={state.zip}
						onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="País"
            fullWidth
            autoComplete="shipping country"
						value={state.country}
						onChange={handleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
