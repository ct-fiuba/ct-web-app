import React from 'react';
import { Card, CardContent, CircularProgress, Grid, Typography, Button, Box} from '@material-ui/core';
import useStyles from './styles';

import Line from "../../LineChart";

export default function SimulateRulesResult({result, loading, onDownload}) {
  const classes = useStyles();

  return (
    <div>
      { result && <Card className={classes.root}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={4} >
            <CardContent className={classes.grid}>
            <Typography variant="h5" component="h2">
                <strong>Estado final</strong>
              </Typography>
            <Typography variant="h6" component="h3">
                {`Usuarios infectados: `}<strong>{result.overall.infected}</strong>
              </Typography>
              <Typography variant="h6" component="h3">
                {`Usuarios con riesgo alto: `}<strong>{result.overall.highRisk}</strong>
              </Typography>
              <Typography variant="h6" component="h3">
                {`Usuarios con riesgo medio: `}<strong>{result.overall.midRisk}</strong>
              </Typography>
              <Typography variant="h6" component="h3">
                {`Usuarios con riesgo bajo: `}<strong>{result.overall.lowRisk}</strong>
              </Typography>
              <Box m={2} pt={2}>
                <Button onClick={onDownload} variant="contained" color="primary">
                  Descargar resultado
                </Button>
              </Box>
            </CardContent>
            
          </Grid>
          <Grid item xs={8}>
            <CardContent className={classes.grid}>
            <Typography variant="h5" component="h2">
                <strong>Estados intermedios</strong>
              </Typography>
              <Line {...result.chart}/>
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
