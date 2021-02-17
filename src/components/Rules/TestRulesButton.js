import React from 'react';
import TestRulesForm from './TestRulesForm';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  testRulesButton: {
    fontWeight: 'bold',
    width: '-webkit-fill-available',
    marginLeft: '5px',
    marginRight: '5px',
  },
  dialogTitle: {
    marginTop: '40px',
    marginLeft: '40px',
    marginRight: '40px',
  },
  dialogContent: {
    marginBottom: '40px',
    marginLeft: '40px',
    marginRight: '40px',
  },
}));

export default function TestRulesButton(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.testRulesButton} variant="outlined" color="primary" onClick={handleClickOpen}>
        Probar reglas
      </Button>
      <Dialog maxWidth={'md'} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.dialogTitle} id="form-dialog-title">Probar reglas de contagio</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <DialogContentText>
            Ingrese las características de un espacio, los horarios de entrada y salida de una persona contagiada, y los de una persona sana. Presioná en "Correr Prueba" para validar con qué regla coincidirá ese contacto y qué riesgo tendra la persona sana.
          </DialogContentText>
          <TestRulesForm handleClose={handleClose} addRule={props.addRule} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
