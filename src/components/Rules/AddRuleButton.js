import React from 'react';
import AddRuleForm from './AddRuleForm';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  addButton: {
    fontWeight: 'bold',
    width: '-webkit-fill-available',
    margin: '5px',
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

export default function AddRuleButton(props) {
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
      <Button className={classes.addButton} size="large" variant="contained" color="primary" onClick={handleClickOpen}>
        <AddIcon /> Crear nueva regla
      </Button>
      <Dialog maxWidth={'md'} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.dialogTitle} id="form-dialog-title">Crear regla de contagio</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <DialogContentText>
            Para que un contacto coincida con una regla de contagio se deben cumplir todas las condiciones al mismo tiempo.
          </DialogContentText>
          <AddRuleForm handleClose={handleClose} addRule={props.addRule} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
