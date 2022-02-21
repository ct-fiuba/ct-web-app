import React, { useState, useEffect } from 'react';
import { Grid, TextField, FormControlLabel, Checkbox, Select, MenuItem, FormControl, InputLabel, Card, CardContent, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';

export default function NewSingleSpaceForm({ initialName, initialM2, initialEstimatedVisitDuration, initialOpenSpace, initialN95Mandatory, initialHasExit, initialIndex, obtainInfo, storeType, deleteSpaceFromForm }) {
  const classes = useStyles();
  const [index, setIndex] = useState(initialIndex);
  const [name, setName] = useState(initialName);
  const [m2, setM2] = useState(initialM2);
  const [estimatedVisitDuration, setEstimatedVisitDuration] = useState(initialEstimatedVisitDuration);
  const [openSpace, setOpenSpace] = useState(initialOpenSpace);
  const [n95Mandatory, setN95Mandatory] = useState(initialN95Mandatory);
  const [hasExit, setHasExit] = useState(initialHasExit);

  const handleNameChange = (event) => {
    let value = event.target.value;
    setName(value);
    obtainInfo(index, {name: value, m2, estimatedVisitDuration, openSpace, n95Mandatory, hasExit});
  };

  const handleM2Change = (event) => {
    let value = event.target.value;
    setM2(value);
    obtainInfo(index, {name, m2: value, estimatedVisitDuration, openSpace, n95Mandatory, hasExit});
  };

  const handleEstimatedVisitDurationChange = (event) => {
    let value = event.target.value;
    setEstimatedVisitDuration(value);
    obtainInfo(index, {name, m2, estimatedVisitDuration: value, openSpace, n95Mandatory, hasExit});
  };

  const handleOpenSpaceChange = (event) => {
    let value = event.target.value;
    setOpenSpace(value);
    obtainInfo(index, {name, m2, estimatedVisitDuration, openSpace: value, n95Mandatory, hasExit});
  };

  const handleN95MandatoryChange = (event) => {
    let value = event.target.checked;
    setN95Mandatory(value);
    obtainInfo(index, {name, m2, estimatedVisitDuration, openSpace, n95Mandatory: value, hasExit});
  };

  const handleHasExitChange = (event) => {
    let value = event.target.checked;
    setHasExit(value);
    obtainInfo(index, {name, m2, estimatedVisitDuration, openSpace, n95Mandatory, hasExit: value});
  };

  useEffect(() => {
    setIndex(initialIndex);
    setName(initialName);
    setM2(initialM2);
    setEstimatedVisitDuration(initialEstimatedVisitDuration);
    setOpenSpace(initialOpenSpace);
    setN95Mandatory(initialN95Mandatory);
    setHasExit(initialHasExit);
  }, [initialIndex, initialName, initialM2, initialEstimatedVisitDuration, initialOpenSpace, initialN95Mandatory, initialHasExit]);

  return (
    <React.Fragment>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField required name="name" value={name} onChange={handleNameChange} label="Nombre del espacio" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField required type="number" name="m2" value={m2} onChange={handleM2Change} label="Metros cuadrados" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField type="number" name="estimatedVisitDuration" value={estimatedVisitDuration} onChange={handleEstimatedVisitDurationChange} label="Tiempo promedio de visita (min)" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="openSpace">Espacio abierto</InputLabel>
                <Select
                  value={openSpace}
                  onChange={handleOpenSpaceChange}
                  name="openSpace"
                  inputProps={{ 'aria-label': 'openSpace' }}
                  fullWidth
                >
                  <MenuItem aria-label="None" value=""></MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                  <MenuItem value={true}>Si</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {
              storeType === 'hospital' &&
              <Grid item xs={12} md={5}>
                <FormControlLabel
                  control={<Checkbox color="secondary" name="n95Mandatory" checked={n95Mandatory} onChange={handleN95MandatoryChange} />}
                  label="Uso de N95 obligatorio"
                />
              </Grid>
            }
            <Grid item xs={12} md={5}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="hasExit" checked={hasExit} onChange={handleHasExitChange} />}
                label="Generar un QR de salida"
              />
            </Grid>
            {
              deleteSpaceFromForm &&
                <Grid item xs={12} md={2}>
                  <Button size="small" color="secondary" onClick={(e) => deleteSpaceFromForm(index)}>
                    <DeleteIcon />
                  </Button>
                </Grid>
            }
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
