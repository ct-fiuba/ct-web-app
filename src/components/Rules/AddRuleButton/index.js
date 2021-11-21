import React, { useState } from 'react';
import AddRuleForm from '../AddRuleForm';
import AddIcon from '@material-ui/icons/Add';
import { Button, Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import useStyles from './styles';

export default function AddRuleButton({addRule, vaccines, initialValues, addRuleFormOpen, duplicateRule, setAddRuleFormOpen}) {
  const classes = useStyles();

  const handleClickOpen = () => {
    duplicateRule(null);
    setAddRuleFormOpen(true);
  };

  const handleClose = () => {
    setAddRuleFormOpen(false);
  };

  return (
    <div>
      <Button className={classes.addButton} size="large" variant="contained" color="primary" onClick={handleClickOpen}>
        <AddIcon /> Crear nueva regla
      </Button>
      <Dialog maxWidth={'md'} open={addRuleFormOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.dialogTitle} id="form-dialog-title">Crear regla de contagio</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <DialogContentText>
            Para que un contacto coincida con una regla de contagio se deben cumplir todas las condiciones al mismo tiempo.
          </DialogContentText>
          <AddRuleForm handleClose={handleClose} addRule={addRule} vaccines={vaccines} initialValues={initialValues} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
