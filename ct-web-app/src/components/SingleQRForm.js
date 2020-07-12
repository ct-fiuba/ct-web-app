import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

export default function SingleQRForm(props) {
  const [state, setState] = React.useState({
    name: '',
    m2: '',
    openPlace: '',
    exitQR: false,
  });

  useEffect(() => {
    checkCompleteness();
  });

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === 'exitQR') {
      value = event.target.checked;
    }
    setState({
      ...state,
      [name]: value,
    });

    if (allFieldsCompleted()) {
			props.obtainInfo({
				...state,
				[name]: value,
			});
		}
  };

  const allFieldsCompleted = () => {
		return (state.name !== '' &&
			state.m2 !== '' &&
      state.openPlace !== '');
	}

  const checkCompleteness = () => {
		props.completeFunction(allFieldsCompleted());
	}

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField required id="name" name="name" value={state.name} onChange={handleChange} label="Identificador del QR" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required type="number" id="m2" name="m2"  value={state.m2} onChange={handleChange} label="Metros cuadrados" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
					<FormControl fullWidth>
						<InputLabel htmlFor="openPlace">Espacio abierto</InputLabel>
						<NativeSelect
							value={state.openPlace}
							onChange={handleChange}
							name="openPlace"
							id="openPlace"
							inputProps={{ 'aria-label': 'openPlace' }}
							fullWidth
						>
              <option aria-label="None" value="" />
							<option value={'no'}>No</option>
							<option value={'yes'}>Si</option>
						</NativeSelect>
					</FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="exitQR" checked={state.exitQR} onChange={handleChange} />}
            label="Generar un QR de salida"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
