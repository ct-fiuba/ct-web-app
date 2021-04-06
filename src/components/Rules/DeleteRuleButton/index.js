import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DeleteRuleButton(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const confirmDeletion = () => {
    props.deleteRule(props.id);
    setOpen(false);
  };

  return (
    <div>
      <Button size="large" variant="outlined" color="secondary" onClick={handleClickOpen}>
        <DeleteIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"¿Desea eliminar esta regla de contagio?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            No podrá recuperarla una vez borrada. En caso de necesitarlo, puede crear otra regla igual.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancelar
          </Button>
          <Button onClick={confirmDeletion} color="secondary">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
