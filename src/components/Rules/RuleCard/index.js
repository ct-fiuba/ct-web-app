import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Draggable } from "react-beautiful-dnd";
import DeleteRuleButton from '../DeleteRuleButton';
import useStyles from './styles';

export default function RuleCard({id, index, contagionRisk, durationCmp, durationValue, m2Cmp, m2Value, spaceValue, n95Mandatory, vaccinated, vaccineReceived, vaccinatedDaysAgoMin, covidRecovered, covidRecoveredDaysAgoMax, deleteRule}) {
  const classes = useStyles();

  return (
    <Draggable draggableId={`${id}`} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className={`${classes.root} ${contagionRisk === 'Alto' ? classes.highRisk : ''} ${contagionRisk === 'Medio' ? classes.mediumRisk : ''} ${contagionRisk === 'Bajo' ? classes.lowRisk : ''}`}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={10}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {`Orden de evaluación: ${index + 1}º`}
                    <br />
                    {`Id regla: ${id}`}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {`Riesgo de contagio `}<strong>{contagionRisk}</strong>
                  </Typography>
                  <Typography variant="body1" component="p">
                    {durationCmp ? `Duración ${durationCmp === '<' ? "menor a" : "mayor a"} ${durationValue} minutos` : ''}
                    {durationCmp ? <br /> : ''}
                    {m2Cmp ? `Superficie ${m2Cmp === '<' ? "menor a" : "mayor a"} ${m2Value} metros cuadrados` : ''}
                    {m2Cmp ? <br /> : ''}
                    {spaceValue ? `Ventilación del espacio: ${spaceValue}` : ''}
                    {spaceValue ? <br /> : ''}

                    {n95Mandatory !== undefined ? `Uso del N95 ${n95Mandatory ? '' : 'no'} obligatorio` : ''}
                    {n95Mandatory !== undefined ? <br /> : ''}

                    {vaccinated === undefined && ''}
                    {vaccinated === 0 && 'Persona no vacunada'}
                    {vaccinated === 1 && 'Persona parcialmente vacunada'}
                    {vaccinated === 2 && 'Persona completamente vacunada'}
                    {vaccineReceived !== undefined && ` con la vacuna ${vaccineReceived}`}
                    {vaccinatedDaysAgoMin !== undefined && ` hace no menos de ${vaccinatedDaysAgoMin} días`}
                    {vaccinated !== undefined && <br />}

                    {covidRecovered === undefined && ''}
                    {covidRecovered === false && `Persona que no tuvo COVID-19`}
                    {covidRecovered === true && `Persona recuperada de COVID-19`}
                    {covidRecoveredDaysAgoMax !== undefined && ` hace no más de ${covidRecoveredDaysAgoMax} días`}
                    {covidRecovered !== undefined && <br />}

                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={2}>
                <DeleteRuleButton deleteRule={deleteRule} id={id}/>
              </Grid>
            </Grid>
          </Card>
        </div>
      )}
    </Draggable>
  );
}
