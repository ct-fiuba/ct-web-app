import React from 'react';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import EditSpaceForm from '../EstablishmentsForms/EditSpaceForm';

export default function EditSpaceButton({ spaceId, establishmentId, establishmentType, name, m2, estimatedVisitDuration, openPlace, n95Mandatory, hasExit, refreshEstablishments }) {
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
        Editar espacio
    </Button>

      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth={'lg'}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <EditSpaceForm
              spaceId={spaceId}
              establishmentId={establishmentId}
              establishmentType={establishmentType}
              initialName={name}
              initialM2={m2}
              initialEstimatedVisitDuration={estimatedVisitDuration}
              initialOpenPlace={openPlace}
              initialN95Mandatory={n95Mandatory}
              initialHasExit={hasExit}
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
