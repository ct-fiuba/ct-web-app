import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme) => ({
  addButton: {
    fontWeight: 'bold',
    width: '-webkit-fill-available',
    margin: '5px',
  },
}));

export default function AddRuleButton(props) {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.addButton} size="large" variant="outlined" color="primary" onClick={props.saveChanges} disabled={props.canSaveChanges}>
        <SaveIcon /> Guardar Cambios
      </Button>
    </div>
  );
}
