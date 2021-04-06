import React from 'react';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import useStyles from './styles';

export default function SaveChangesButton({saveChanges, canSaveChanges}) {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.addButton} size="large" variant="outlined" color="primary" onClick={saveChanges} disabled={!canSaveChanges}>
        <SaveIcon /> Guardar Cambios
      </Button>
    </div>
  );
}
