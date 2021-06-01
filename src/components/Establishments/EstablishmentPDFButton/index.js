import React from 'react';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import * as establishmentsService from '../../../services/establishmentsService';

export default function EstablishmentPDFButton({ establishmentId }) {
  const classes = useStyles();

  const handleDownloadEstablishmentPDF = () => {
    establishmentsService.downloadEstablishmentPDF(establishmentId);
  }

  return (
    <Button
      variant="outlined"
      color="primary"
      className={classes.button}
      startIcon={<CloudDownloadIcon />}
      onClick={handleDownloadEstablishmentPDF}
    >
      Descargar PDF del establecimiento
    </Button>
  );
}
