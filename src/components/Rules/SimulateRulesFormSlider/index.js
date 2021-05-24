import React from 'react';
import { Grid, Slider, Tooltip } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import useStyles from './styles';

export default function SimulateRulesFormSlider({max, title, tooltip, value, handleValueChange}) {
  const classes = useStyles();

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: max,
      label: `${max}`,
    },
  ];

  return (
    <>
      <Grid className={classes.firstSliderGrid} item xs={6}>
        <h4 className={classes.titles}>{title}
          <Tooltip className={classes.tooltips} placement="right" title={<span className={classes.tooltipsText}>{tooltip}</span>}>
            <HelpIcon color="action" fontSize="small"></HelpIcon>
          </Tooltip>
        </h4>
      </Grid>
      <Grid className={classes.firstSliderGrid} item xs={6}>
        <Slider
          value={value}
          aria-labelledby="discrete-slider-always"
          step={1}
          max={max}
          marks={marks}
          onChange={handleValueChange}
          valueLabelDisplay="on"
        />
      </Grid>
    </>
  );
}
