import React from 'react';
import { Typography, List, ListItem, ListItemText, Grid } from '@material-ui/core';
import useStyles from './styles';

const typeTranslation = {
  hospital: 'Hospital',
	food: 'Gastronómico',
	supermarket: 'Supermercado',
	clothing: 'Venta de Ropa',
	transportation: 'Transporte',
	other: 'Otros'
}

export default function ConfirmationForm({firstStepInfo, secondStepInfo}) {
  const classes = useStyles();
	const establecimiento = firstStepInfo;
	const QRs = secondStepInfo;

  const buildQRListItem = (qr) => {
    let primary_text = qr.hasExit ? qr.name + " (x2)" : qr.name;
    let secondary_text = `Espacio ${qr.openPlace === "yes" ? 'Abierto. ' : 'Cerrado. '}`;
    secondary_text = secondary_text.concat(`Tamaño: ${qr.m2} m2. `);
    secondary_text = secondary_text.concat(qr.estimatedVisitDuration ? `Visita estimada: ${qr.estimatedVisitDuration} minutos. ` : '');
    secondary_text = secondary_text.concat(firstStepInfo.type === 'hospital' ? `Uso de N95 ${!qr.n95Mandatory ? 'no' : ''} obligatorio.` : '');
    console.log(primary_text);
    console.log(secondary_text);
    return <ListItemText primary={primary_text} secondary={secondary_text}/>
  }

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
            {buildQRListItem(qr)}
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
