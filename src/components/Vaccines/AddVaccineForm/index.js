import React, { useState } from 'react';
import { Grid, Button, TextField } from '@material-ui/core';
import useStyles from './styles';

export default function AddVaccineForm({addVaccine, handleClose}) {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [doses, setDoses] = useState('');
  const [fieldsCompleted, setFieldsCompleted] = useState(false);

  const handleNameValueChange = (event) => {
    setName(event.target.value);
    setFieldsCompleted(event.target.value !== '' && doses !== '')
  }

  const handleDosesValueChange = (event) => {
    setDoses(event.target.value);
    setFieldsCompleted(event.target.value !== '' && name !== '')
  }

  const handleConfirm = () => {
    if (fieldsCompleted) {
      addVaccine({name, shotsCount: doses});
      handleClose();
    }
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField
          id="nameValue"
          type="string"
          helperText="Nombre de la vacuna"
          variant="outlined"
          onChange={handleNameValueChange}
          value={name}
          className={classes.inputs}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="dosesValue"
          type="number"
          helperText="Cantidad de dosis"
          variant="outlined"
          onChange={handleDosesValueChange}
          value={doses}
          className={classes.inputs}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={handleConfirm}
          color="primary"
          variant="contained"
          disabled={!fieldsCompleted}
          className={classes.button}
        >
          Crear
        </Button>
      </Grid>
    </Grid>
  );
}
