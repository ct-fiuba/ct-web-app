import React from 'react';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import * as establishmentsService from '../../../services/establishmentsService';

export default function NewSpaceButton({ establishmentId }) {
  const classes = useStyles();
  const [openModal, setOpenModal] = React.useState(false);


  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleConfirmModal = async () => {
    handleCloseModal();
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        startIcon={<AddBoxIcon />}
        onClick={handleOpenModal}
      >
        Agregar nuevos espacios
    </Button>

      <Dialog
        open={openModal}
        onClose={handleCloseModal}
      >
        <DialogTitle>{`Creación de nuevos espacios`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Acá iría el form para crear nuevos espacios
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary" autoFocus>
            Cancelar
          </Button>
          <Button onClick={handleConfirmModal} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
