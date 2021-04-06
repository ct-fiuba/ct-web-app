import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';
import useStyles from '../../styles/SimulateRulesFormSlider.style';

export default function SimulateRulesFormSlider(props) {
  const classes = useStyles();

  const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: props.max,
      label: `${props.max}`,
    },
  ];

  return (
    <>
      <Grid className={classes.firstSliderGrid} item xs={4}>
        <h4 className={classes.titles}>{props.title}
          <Tooltip className={classes.tooltips} placement="right" title={<span className={classes.tooltipsText}>{props.tooltip}</span>}>
            <HelpIcon color="action" fontSize="small"></HelpIcon>
          </Tooltip>
        </h4>
      </Grid>
      <Grid className={classes.firstSliderGrid} item xs={8}>
        <Slider
          value={props.value}
          aria-labelledby="discrete-slider-always"
          step={1}
          max={props.max}
          marks={marks}
          onChange={props.handleValueChange}
          valueLabelDisplay="on"
        />
      </Grid>
    </>
  );
}
