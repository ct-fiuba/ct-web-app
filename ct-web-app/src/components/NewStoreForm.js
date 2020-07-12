import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

export default function NewStoreForm(props) {
  useEffect(() => {
    checkCompleteness();
  });

	const [state, setState] = React.useState(props.initialState);

	const allFieldsCompleted = () => {
		return (state.typeOfStore !== '' &&
			state.storeName !== '' &&
			state.email !== '' &&
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
			props.obtainInfo({
				...state,
				[name]: event.target.value,
			});
		}
  };

	const checkCompleteness = () => {
		props.completeFunction(allFieldsCompleted());
	}

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Registro de nuevo local
      </Typography>
      <Grid container spacing={3}>
			  <Grid item xs={12}>
					<FormControl fullWidth>
						<InputLabel htmlFor="typeOfStore">Tipo de establecimiento</InputLabel>
						<NativeSelect
							value={state.typeOfStore}
							onChange={handleChange}
							name="typeOfStore"
							id="typeOfStore"
							inputProps={{ 'aria-label': 'typeOfStore' }}
							fullWidth
						>
							<option aria-label="None" value="" />
							<option value={'food'}>Gastronómico</option>
							<option value={'supermarket'}>Supermercado</option>
							<option value={'clothing'}>Venta de Ropa</option>
							<option value={'transportation'}>Transporte</option>
							<option value={'other'}>Otros</option>
						</NativeSelect>
					</FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="storeName"
            name="storeName"
            label="Nombre del establecimiento"
						value={state.storeName}
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
