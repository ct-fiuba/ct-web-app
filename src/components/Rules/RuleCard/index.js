import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Draggable } from "react-beautiful-dnd";
import DeleteRuleButton from '../DeleteRuleButton';
import useStyles from './styles';

export default function RuleCard({id, index, contagionRisk, durationCmp, durationValue, m2Cmp, m2Value, spaceValue, deleteRule}) {
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
