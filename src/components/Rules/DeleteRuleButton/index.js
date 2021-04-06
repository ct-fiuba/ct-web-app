import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

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
