import React from 'react';
import { Typography, List, ListItem, ListItemText, Grid } from '@material-ui/core';
import useStyles from './styles';
import { typeTranslation } from '../../../../utils/establishmentsUtils';

export default function ConfirmationForm({ firstStepInfo, secondStepInfo }) {
  const classes = useStyles();
  const establishment = firstStepInfo;
  const spaces = secondStepInfo;

  const buildSpaceListItem = (space) => {
    let primary_text = space.hasExit ? space.name + " (x2)" : space.name;
    let secondary_text = `Espacio ${space.openPlace === "yes" ? 'Abierto. ' : 'Cerrado. '}`;
    secondary_text = secondary_text.concat(`Tamaño: ${space.m2} m2. `);
    secondary_text = secondary_text.concat(space.estimatedVisitDuration ? `Visita estimada: ${space.estimatedVisitDuration} minutos. ` : '');
    secondary_text = secondary_text.concat(firstStepInfo.type === 'hospital' ? `Uso de N95 ${!space.n95Mandatory ? 'no' : ''} obligatorio.` : '');
    return <ListItemText primary={primary_text} secondary={secondary_text} />
  }

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Información del establecimiento
          </Typography>
          <Typography gutterBottom><b>{establishment.name}</b></Typography>
          <Typography gutterBottom>{typeTranslation[establishment.type]}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Dirección
          </Typography>
          <Typography gutterBottom>{establishment.address}</Typography>
          <Typography gutterBottom>{establishment.zip + ", " + establishment.city}</Typography>
          <Typography gutterBottom>{establishment.state + ", " + establishment.country}</Typography>
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom>
        Espacios a generar
      </Typography>
      <List disablePadding>
        {spaces.map((space) => (
          <ListItem className={classes.listItem} key={space.name}>
            {buildSpaceListItem(space)}
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
