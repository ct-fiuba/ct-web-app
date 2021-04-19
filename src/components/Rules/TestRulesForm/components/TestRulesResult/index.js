import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';

export default function TestRulesResult({rule, notMatch}) {
  const classes = useStyles();

  return (
    <div>
      { rule && <Card className={`${classes.root} ${rule.contagionRisk === 'Alto' ? classes.highRisk : ''} ${rule.contagionRisk === 'Medio' ? classes.mediumRisk : ''} ${rule.contagionRisk === 'Bajo' ? classes.lowRisk : ''}`}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {`Orden de evaluación: ${rule.index + 1}º`}
                <br />
                {`Id regla: ${rule.id}`}
              </Typography>
              <Typography variant="h5" component="h2">
                {`Riesgo de contagio `}<strong>{rule.contagionRisk}</strong>
              </Typography>
              <Typography variant="body1" component="p">
                {rule.durationCmp ? `Duración ${rule.durationCmp === '<' ? "menor a" : "mayor a"} ${rule.durationValue} minutos` : ''}
                {rule.durationCmp ? <br /> : ''}
                {rule.m2Cmp ? `Superficie ${rule.m2Cmp === '<' ? "menor a" : "mayor a"} ${rule.m2Value} metros cuadrados` : ''}
                {rule.m2Cmp ? <br /> : ''}
                {rule.spaceValue ? `Ventilación del espacio: ${rule.spaceValue}` : ''}
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
