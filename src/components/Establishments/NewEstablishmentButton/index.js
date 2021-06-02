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
import NewEstablishmentForm from '../NewEstablishmentsForms/NewEstablishmentForm';

export default function NewEstablishmentButton() {
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
        className={classes.newEstablishmentModal}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <NewEstablishmentForm />
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
