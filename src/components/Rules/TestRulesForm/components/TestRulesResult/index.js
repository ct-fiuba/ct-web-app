import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';

export default function TestRulesResult({rule, notMatch}) {
  const classes = useStyles();

  const contagionRiskToString = {
    0: 'Bajo',
    1: 'Medio',
    2: 'Alto'
  }

  return (
    <div>
      { rule && <Card className={`${classes.root} ${rule.contagionRisk === 2 ? classes.highRisk : ''} ${rule.contagionRisk === 1 ? classes.mediumRisk : ''} ${rule.contagionRisk === 0 ? classes.lowRisk : ''}`}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {`Orden de evaluación: ${rule.index + 1}º`}
                <br />
                {`Id regla: ${rule.id}`}
              </Typography>
              <Typography variant="h5" component="h2">
                {`Riesgo de contagio `}<strong>{contagionRiskToString[rule.contagionRisk]}</strong>
              </Typography>
              <Typography variant="body1" component="p">
                {rule.durationCmp ? `Duración ${rule.durationCmp === '<' ? "menor a" : "mayor a"} ${rule.durationValue} minutos` : ''}
                {rule.durationCmp ? <br /> : ''}
                {rule.m2Cmp ? `Superficie ${rule.m2Cmp === '<' ? "menor a" : "mayor a"} ${rule.m2Value} metros cuadrados` : ''}
                {rule.m2Cmp ? <br /> : ''}
                {rule.openSpace ? `Ventilación del espacio: ${rule.openSpace ? 'Abierto' : 'Cerrado'}` : ''}

                {rule.n95Mandatory !== undefined ? `Uso del N95 ${rule.n95Mandatory ? '' : 'no'} obligatorio` : ''}
                {rule.n95Mandatory !== undefined ? <br /> : ''}

                {rule.vaccinated === undefined && ''}
                {rule.vaccinated === 0 && 'Persona no vacunada'}
                {rule.vaccinated === 1 && 'Persona parcialmente vacunada'}
                {rule.vaccinated === 2 && 'Persona completamente vacunada'}
                {rule.vaccineReceived !== undefined && ` con la vacuna ${rule.vaccineReceived}`}
                {rule.vaccinatedDaysAgoMin !== undefined && ` hace no menos de ${rule.vaccinatedDaysAgoMin} días`}
                {rule.vaccinated !== undefined ? <br /> : ''}

                {rule.illnessRecovered === undefined && ''}
                {rule.illnessRecovered === false && `Persona que no tuvo COVID-19`}
                {rule.illnessRecovered === true && `Persona recuperada de COVID-19`}
                {rule.illnessRecoveredDaysAgoMax !== undefined && ` hace no más de ${rule.illnessRecoveredDaysAgoMax} días`}
                {rule.illnessRecovered !== undefined && <br />}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      }
      { notMatch && <Card className={`${classes.root} ${classes.lowRisk}`}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {"Ninguna regla aplicó a esta situación, por lo que el riesgo de contagio será "}<strong>{"Bajo"}</strong>
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      }
    </div>
  );
}
