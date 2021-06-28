import React from 'react';
import useStyles from './styles';
import Button from '@material-ui/core/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import * as establishmentsService from '../../../services/establishmentsService';

export default function SpacePDFButton({ spaceId, establishmentId }) {
  const classes = useStyles();

  const handleDownloadSpacePDF = () => {
    establishmentsService.downloadSpacePDF(spaceId, establishmentId);
  }

  return (
    <Button
      variant="outlined"
      color="primary"
      className={classes.button}
      startIcon={<CloudDownloadIcon />}
      onClick={handleDownloadSpacePDF}
    >
      Descargar PDF del espacio
    </Button>
  );
}
