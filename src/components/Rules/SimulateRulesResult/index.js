import React from 'react';
import { Card, CardContent, CircularProgress, Grid, Typography} from '@material-ui/core';
import useStyles from './styles';

export default function SimulateRulesResult(props) {
  const classes = useStyles();

  return (
    <div>
      { props.result && <Card className={classes.root}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12}>
            <CardContent>
            <Typography variant="h5" component="h2">
                {`Usuarios infectados: `}<strong>{props.result.infected}</strong>
              </Typography>
              <Typography variant="h5" component="h2">
                {`Usuarios con riesgo alto: `}<strong>{props.result.highRisk}</strong>
              </Typography>
              <Typography variant="h5" component="h2">
                {`Usuarios con riesgo medio: `}<strong>{props.result.midRisk}</strong>
              </Typography>
              <Typography variant="h5" component="h2">
                {`Usuarios con riesgo bajo: `}<strong>{props.result.lowRisk}</strong>
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      }
      { props.loading && 
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} className={classes.gridProgress}>
            <CircularProgress /> 
          </Grid>
        </Grid>
      }
    </div>
  );
}
