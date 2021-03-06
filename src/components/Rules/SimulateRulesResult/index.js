import React from 'react';
import { Card, CardContent, CircularProgress, Grid, Typography} from '@material-ui/core';
import useStyles from './styles';

export default function SimulateRulesResult({result, loading}) {
  const classes = useStyles();

  return (
    <div>
      { result && <Card className={classes.root}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12}>
            <CardContent>
            <Typography variant="h5" component="h2">
                {`Usuarios infectados: `}<strong>{result.infected}</strong>
              </Typography>
              <Typography variant="h5" component="h2">
                {`Usuarios con riesgo alto: `}<strong>{result.highRisk}</strong>
              </Typography>
              <Typography variant="h5" component="h2">
                {`Usuarios con riesgo medio: `}<strong>{result.midRisk}</strong>
              </Typography>
              <Typography variant="h5" component="h2">
                {`Usuarios con riesgo bajo: `}<strong>{result.lowRisk}</strong>
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      }
      { loading && 
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} className={classes.gridProgress}>
            <CircularProgress /> 
          </Grid>
        </Grid>
      }
    </div>
  );
}
