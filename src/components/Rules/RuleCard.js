import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '10px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function RuleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Draggable draggableId={`${props.id}`} index={props.index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {`Orden de evaluación: ${props.index + 1}`}
                <br />
                {`Id regla: ${props.id}`}
              </Typography>
              <Typography variant="h5" component="h2">
                {`Riesgo ${props.contagionRisk}`}
              </Typography>
              <Typography variant="body2" component="p">
                {props.durationCmp ? `Duración ${props.durationCmp} ${props.durationValue} minutos` : ''}
                {props.durationCmp ? <br /> : '' }
                {props.m2Cmp ? `Tamaño ${props.m2Cmp} ${props.m2Value} metros cuadrados` : ''}
                {props.m2Cmp ? <br /> : '' }
                {props.spaceValue ? `Espacio ${props.spaceValue}` : ''}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      )}
    </Draggable>
  );
}
