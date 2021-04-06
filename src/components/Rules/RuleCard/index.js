import React from 'react';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { Draggable } from "react-beautiful-dnd";
import DeleteRuleButton from '../DeleteRuleButton';
import useStyles from './styles';

export default function RuleCard(props) {
  const classes = useStyles();

  return (
    <Draggable draggableId={`${props.id}`} index={props.index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className={`${classes.root} ${props.contagionRisk === 'Alto' ? classes.highRisk : ''} ${props.contagionRisk === 'Medio' ? classes.mediumRisk : ''} ${props.contagionRisk === 'Bajo' ? classes.lowRisk : ''}`}>
            <Grid container className={classes.gridContainer}>
              <Grid item xs={10}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {`Orden de evaluación: ${props.index + 1}º`}
                    <br />
                    {`Id regla: ${props.id}`}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {`Riesgo de contagio `}<strong>{props.contagionRisk}</strong>
                  </Typography>
                  <Typography variant="body1" component="p">
                    {props.durationCmp ? `Duración ${props.durationCmp === '<' ? "menor a" : "mayor a"} ${props.durationValue} minutos` : ''}
                    {props.durationCmp ? <br /> : ''}
                    {props.m2Cmp ? `Superficie ${props.m2Cmp === '<' ? "menor a" : "mayor a"} ${props.m2Value} metros cuadrados` : ''}
                    {props.m2Cmp ? <br /> : ''}
                    {props.spaceValue ? `Ventilación del espacio: ${props.spaceValue}` : ''}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid item xs={2}>
                <DeleteRuleButton deleteRule={props.deleteRule} id={props.id}/>
              </Grid>
            </Grid>
          </Card>
        </div>
      )}
    </Draggable>
  );
}
