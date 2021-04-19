import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';

export default function TimePickersInput({title, startDate, handleStartDateChange, endDate, handleEndDateChange}) {
  const classes = useStyles();
  
  return (
    <>
      <Grid item xs={4}>
        <h4 className={classes.titleTimePickers}>{title}</h4>
      </Grid>
      <Grid item xs={4} className={classes.timePickersGrid}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            margin="normal"
            id="startDate"
            label="Entrada"
            value={startDate}
            onChange={handleStartDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
            className={classes.timePickers}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={4} className={classes.timePickersGrid}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            margin="normal"
            id="endDate"
            label="Salida"
            value={endDate}
            onChange={handleEndDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
            className={classes.timePickers}
          />
        </MuiPickersUtilsProvider>
      </Grid>
    </>
  );
}
