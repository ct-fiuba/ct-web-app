import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonsGrid: {
    marginTop: '15px',
    textAlign: 'right',
  },
  durationValue: {
    marginTop: '8px',
    width: '-webkit-fill-available',
  },
  timePickers: {
    width: '-webkit-fill-available',
  },
  timePickersGrid: {
    paddingLeft: '12px',
    paddingRight: '8px',
  }
}));

export default useStyles;