import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '10px',
    borderTopStyle: 'inset',
  },
  notMatchCard: {
    minWidth: 275,
    margin: '10px',
    backgroundColor: '#b5ffcf',
  },
  highRisk: {
    borderTop: '30px solid #ff5252',
  },
  mediumRisk: {
    borderTop: '30px solid #ffdb44',
  },
  lowRisk: {
    borderTop: '30px solid #b5ffcf',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  gridContainer: {
    alignItems: 'center',
  }
});

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
