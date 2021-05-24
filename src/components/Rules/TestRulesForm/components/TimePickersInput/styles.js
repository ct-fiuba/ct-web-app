import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  titleTimePickers: {
    marginTop: '28px',
    textAlign: 'center',
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