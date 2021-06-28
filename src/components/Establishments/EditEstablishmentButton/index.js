import React from 'react';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import EditEstablishmentForm from '../EstablishmentsForms/EditEstablishmentForm';

export default function EditEstablishmentButton({ establishmentId, name, type, address, city, state, country, zip, spaces, refreshEstablishments }) {
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
        variant="outlined"
        color="primary"
        className={classes.button}
        startIcon={<EditIcon />}
        onClick={handleOpenModal}
      >
        Editar establecimiento
    </Button>

      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth={'lg'}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <EditEstablishmentForm
              id={establishmentId}
              initialName={name}
              initialType={type}
              initialAddress={address}
              initialCity={city}
              initialState={state}
              initialCountry={country}
              initialZip={zip}
              initialSpaces={spaces}
              confirmCallback={handleConfirm}
            />
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
