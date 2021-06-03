import React from 'react';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import NewEstablishmentForm from '../EstablishmentsForms/NewEstablishmentForm';

export default function NewEstablishmentButton({ refreshEstablishments }) {
  const classes = useStyles();
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleConfirm = async () => {
    await refreshEstablishments();
    handleCloseModal();
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddBoxIcon />}
        onClick={handleOpenModal}
      >
        Crear nuevo establecimiento
    </Button>

      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth={'lg'}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <NewEstablishmentForm confirmCallback={handleConfirm} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary" autoFocus>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
