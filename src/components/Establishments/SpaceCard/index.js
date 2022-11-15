import React from 'react';
import useStyles from './styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import SpaceToggle from '../SpaceToggle';
import SpacePDFButton from '../SpacePDFButton';
import EditSpaceButton from '../EditSpaceButton';

export default function SpaceCard({ id, name, m2, openSpace, hasExit,  estimatedVisitDuration, enabled, n95Mandatory, establishmentId, establishmentType, refreshEstablishments }) {
  const classes = useStyles();

  return (
    <Card className={classes.spaceCard}>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={8}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {`Id espacio: ${id}`}
            </Typography>
            <Typography variant="h5" component="h2">
              {`Nombre: `}<strong>{name}</strong>
            </Typography>
            <Typography variant="body1" component="p">
              {`Metros cuadrados: ${m2}`}<br />
              {`Espacio ventilado: ${openSpace ? 'Si' : 'No'}`}<br />
              {`Duración estimada de la visita: ${estimatedVisitDuration} minutos`}<br />
              {`Tiene QR de salida: ${hasExit ? 'Si' : 'No'}`}<br />
              {`Habilitado: ${enabled ? 'Si' : 'No'}`}<br />

              {n95Mandatory === undefined && ''}
              {n95Mandatory === false && 'Uso de N95 no obligatorio'}
              {n95Mandatory === true && 'Uso de N95 obligatorio'}
              {n95Mandatory !== undefined && <br />}

            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4} className={classes.buttonsGroup}>
          <SpaceToggle spaceId={id} establishmentId={establishmentId} isEnabled={enabled} refreshEstablishments={refreshEstablishments} />
          <EditSpaceButton spaceId={id} establishmentId={establishmentId} establishmentType={establishmentType} name={name} m2={m2} estimatedVisitDuration={estimatedVisitDuration} openSpace={openSpace} n95Mandatory={n95Mandatory} hasExit={hasExit} refreshEstablishments={refreshEstablishments} />
          <SpacePDFButton spaceId={id} establishmentId={establishmentId} />
        </Grid>
      </Grid>
    </Card>
  );
}
