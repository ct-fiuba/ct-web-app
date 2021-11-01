import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import useStyles from './styles';
import EditVaccinesTable from '../EditVaccinesTable'

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
            Aca se van a listar las vacunas
          </DialogContentText>
          <EditVaccinesTable />
        </DialogContent>
      </Dialog>
    </div>
  );
}
