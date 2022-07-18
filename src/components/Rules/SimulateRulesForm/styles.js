import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonsGrid: {
    marginTop: '15px',
    textAlign: 'right',
  },
  titles: {
    marginTop: '5px',
    textAlign: 'center',
  },
  mobility: {
    marginTop: '5px',
  },
  sliderGrids: {
    marginTop: '15px'
  },
  firstSliderGrid: {
    marginTop: '25px'
  },
  tooltipsText: {
    fontSize: '14px'
  },
  tooltips: {
    marginLeft: '5px'
  },
  accordion: {display: "flex", flexDirection: "column"},
  accordionTitle: { width: '33%', flexShrink: 0 },
  accordionSubtitle: { color: '#0000008a' }
}));

export default useStyles;