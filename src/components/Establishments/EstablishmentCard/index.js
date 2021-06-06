import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Grid, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './styles';
import SpacesContainer from '../SpacesContainer';
import NewSpaceButton from '../NewSpaceButton';
import EditEstablishmentButton from '../EditEstablishmentButton';
import EstablishmentPDFButton from '../EstablishmentPDFButton';
import { typeTranslation } from '../../../utils/establishmentsUtils';

export default function EstablishmentCard({ id, name, type, address, city, state, country, zip, spaces, spacesInfo, refreshEstablishments }) {
  const classes = useStyles();

  return (
    <Card className={classes.establishmentCard}>
      <CardContent>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={8}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {`Id establecimiento: ${id}`}
            </Typography>
            <Typography variant="h5" component="h2">
              {`Nombre: `}<strong>{name}</strong>
            </Typography>
            <Typography variant="body1" component="p">
              {`Tipo de establecimiento: ${typeTranslation[type]}`}<br />
              {`Dirección: ${address}`}<br />
              {`Código postal: ${zip}`}<br />
              {`Ciudad: ${city}`}<br />
              {`Provincia: ${state}`}<br />
              {`Pais: ${country}`}<br />
              {`Cantidad de espacios: ${spaces.length}`}<br />
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <EditEstablishmentButton
              establishmentId={id}
              name={name}
              type={type}
              address={address}
              city={city}
              state={state}
              country={country}
              zip={zip}
              spaces={spacesInfo}
              refreshEstablishments={refreshEstablishments}
            />
            <NewSpaceButton
              establishmentId={id}
              name={name}
              type={type}
              refreshEstablishments={refreshEstablishments}
            />
            <EstablishmentPDFButton establishmentId={id} />
          </Grid>
          <Grid item xs={12}>
            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.detalleEspaciosTitle}>+ Detalle de los espacios</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <SpacesContainer initialSpaces={spacesInfo} establishmentType={type} refreshEstablishments={refreshEstablishments} />
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
