import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  titleDuration: {
    marginTop: '28px',
    textAlign: 'center',
  },
  checkboxes: {
    marginTop: '16px',
  },
  durationValue: {
    marginTop: '8px',
    width: '-webkit-fill-available',
  },
  formControlDurationCmp: {
    margin: theme.spacing(1),
    width: '-webkit-fill-available',
  },
  labelDurationCmp: {
    marginLeft: '10px',
  },
}));

export default useStyles;