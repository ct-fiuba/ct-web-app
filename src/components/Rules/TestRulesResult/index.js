import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';

export default function TestRulesResult(props) {
  const classes = useStyles();

  return (
    <div>
      { props.rule && <Card className={`${classes.root} ${props.rule.contagionRisk === 'Alto' ? classes.highRisk : ''} ${props.rule.contagionRisk === 'Medio' ? classes.mediumRisk : ''} ${props.rule.contagionRisk === 'Bajo' ? classes.lowRisk : ''}`}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {`Orden de evaluación: ${props.rule.index + 1}º`}
                <br />
                {`Id regla: ${props.rule.id}`}
              </Typography>
              <Typography variant="h5" component="h2">
                {`Riesgo de contagio `}<strong>{props.rule.contagionRisk}</strong>
              </Typography>
              <Typography variant="body1" component="p">
                {props.rule.durationCmp ? `Duración ${props.rule.durationCmp === '<' ? "menor a" : "mayor a"} ${props.rule.durationValue} minutos` : ''}
                {props.rule.durationCmp ? <br /> : ''}
                {props.rule.m2Cmp ? `Superficie ${props.rule.m2Cmp === '<' ? "menor a" : "mayor a"} ${props.rule.m2Value} metros cuadrados` : ''}
                {props.rule.m2Cmp ? <br /> : ''}
                {props.rule.spaceValue ? `Ventilación del espacio: ${props.rule.spaceValue}` : ''}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      }
      { props.notMatch && <Card className={`${classes.root} ${classes.lowRisk}`}>
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
