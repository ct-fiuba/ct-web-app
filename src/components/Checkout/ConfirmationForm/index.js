import React from 'react';
import { Typography, List, ListItem, ListItemText, Grid } from '@material-ui/core';
import useStyles from './styles';

const typeTranslation = {
	food: 'Gastronómico',
	supermarket: 'Supermercado',
	clothing: 'Venta de Ropa',
	transportation: 'Transporte',
	other: 'Otros'
}

export default function ConfirmationForm(props) {
  const classes = useStyles();
	const establecimiento = props.firstStepInfo;
	const QRs = props.secondStepInfo;

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Datos generales
          </Typography>
          <Typography gutterBottom><b>{establecimiento.name}</b></Typography>
          <Typography gutterBottom>{typeTranslation[establecimiento.type]}</Typography>
          <Typography gutterBottom>{establecimiento.email}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Dirección
          </Typography>
        	<Typography gutterBottom>{establecimiento.address}</Typography>
          <Typography gutterBottom>{establecimiento.zip + ", " + establecimiento.city}</Typography>
          <Typography gutterBottom>{establecimiento.state + ", " + establecimiento.country}</Typography>
        </Grid>
      </Grid>
			<Typography variant="h6" gutterBottom>
        Resumen de QRs a generar
      </Typography>
      <List disablePadding>
        {QRs.map((qr) => (
          <ListItem className={classes.listItem} key={qr.name}>
            <ListItemText primary={qr.hasExit ? qr.name + " (x2)" : qr.name} secondary={qr.openPlace === "yes" ? "Espacio Abierto" : "Espacio Cerrado"}/>
            <Typography variant="body2">{
              qr.estimatedVisitDuration ?
                `Espacio: ${qr.m2} m2. Visita estimada: ${qr.estimatedVisitDuration} minutos.`:
                `Espacio: ${qr.m2} m2.`
              }</Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
