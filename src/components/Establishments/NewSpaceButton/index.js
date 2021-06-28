import React from 'react';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import AddSingleSpacesForm from '../EstablishmentsForms/AddSingleSpacesForm';

export default function NewSpaceButton({ establishmentId, name, type, refreshEstablishments }) {
  const classes = useStyles();
  const [openModal, setOpenModal] = React.useState(false);


  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const confirmCallback = async () => {
    await refreshEstablishments();
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
        maxWidth={'lg'}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <AddSingleSpacesForm establishmentId={establishmentId} type={type} name={name} confirmCallback={confirmCallback} />
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
