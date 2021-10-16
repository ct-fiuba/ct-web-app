import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  checkboxes: {
    marginTop: '16px',
  },
  titleIllnessRecovered: {
    marginTop: '28px',
    textAlign: 'center',
  },
  formControlIllnessRecoveredValue: {
    margin: theme.spacing(1),
    marginRight: '0px',
    width: '-webkit-fill-available',
  },
  labelIllnessRecoveredValue: {
    marginLeft: '10px',
  },
}));

export default useStyles;
