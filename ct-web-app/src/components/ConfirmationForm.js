import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

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
          <Typography gutterBottom><b>{establecimiento.storeName}</b></Typography>
          <Typography gutterBottom>{typeTranslation[establecimiento.typeOfStore]}</Typography>
          <Typography gutterBottom>{establecimiento.email}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Dirección
          </Typography>
        	<Typography gutterBottom>{establecimiento.address}</Typography>
          <Typography gutterBottom>{establecimiento.zip + ", " + establecimiento.city}</Typography>
          <Typography gutterBottom>{establecimiento.country}</Typography>
        </Grid>
      </Grid>
			<Typography variant="h6" gutterBottom>
        Resumen de QRs a generar
      </Typography>
      <List disablePadding>
        {QRs.map((qr) => (
          <ListItem className={classes.listItem} key={qr.name}>
            <ListItemText primary={qr.exitQR ? qr.name + " (x2)" : qr.name} secondary={qr.openSpace === "yes" ? "Espacio Abierto" : "Espacio Cerrado"}/>
            <Typography variant="body2">{qr.m2 + " m2"}</Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
