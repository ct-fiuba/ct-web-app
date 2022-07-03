import React, { useState } from 'react';
import AddVaccineForm from '../AddVaccineForm';
import AddIcon from '@material-ui/icons/Add';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import useStyles from './styles';

export default function AddVaccineButton({addVaccine}) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.addButton} size="small" variant="contained" color="primary" onClick={handleClickOpen}>
        <AddIcon /> Crear nueva vacuna
      </Button>
      <Dialog maxWidth={'md'} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.dialogTitle} id="form-dialog-title">Crear vacuna</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <DialogContentText>
            Provea un nombre de vacuna y cantidad de dosis.
          </DialogContentText>
          <AddVaccineForm handleClose={handleClose} addVaccine={addVaccine} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
