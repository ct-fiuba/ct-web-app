import React, {} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(2)
  },
}));

export default function SingleQRForm(props) {
  const classes = useStyles();
  const [state, setState] = React.useState(props.initialState);

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
              <TextField required type="number" name="estimatedVisitDuration"  value={state.estimatedVisitDuration} onChange={handleChange} label="Tiempo promedio de visita (min)" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="openPlace">Espacio abierto</InputLabel>
                <NativeSelect
                  value={state.openPlace}
                  onChange={handleChange}
                  name="openPlace"
                  inputProps={{ 'aria-label': 'openPlace' }}
                  fullWidth
                >
                  <option aria-label="None" value="" />
                  <option value={'no'}>No</option>
                  <option value={'yes'}>Si</option>
                </NativeSelect>
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
