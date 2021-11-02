import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import useStyles from './styles';
import Vaccines from '../Vaccines'

export default function EditVaccinesButton() {
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
      <Button className={classes.editVaccinesButton} variant="outlined" color="primary" onClick={handleClickOpen}>
        Editar vacunas
      </Button>
      <Dialog maxWidth={'md'} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.dialogTitle} id="form-dialog-title">Editar vacunas</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <DialogContentText>
            Las vacunas listadas a continuación son utilizadas por todo el sistema. Por favor provea el nombre oficial de la vacuna y la cantidad de dosis a recibir para completar el esquema de vacunación.
          </DialogContentText>
          <Vaccines />
        </DialogContent>
      </Dialog>
    </div>
  );
}
