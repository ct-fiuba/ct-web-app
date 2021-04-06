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
  titleM2: {
    marginTop: '28px',
    textAlign: 'center',
  },
  m2Value: {
    marginTop: '8px',
    marginLeft: '8px',
    width: '-webkit-fill-available',
  },
  titleSpace: {
    marginTop: '28px',
    textAlign: 'center',
  },
  formControlSpaceValue: {
    margin: theme.spacing(1),
    marginRight: '0px',
    width: '-webkit-fill-available',
  },
  labelSpaceValue: {
    marginLeft: '10px',
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