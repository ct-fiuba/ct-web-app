import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  titleCovidRecovered: {
    marginTop: '28px',
    textAlign: 'center',
  },
  formControlCovidRecoveredValue: {
    margin: theme.spacing(1),
    marginRight: '0px',
    width: '-webkit-fill-available',
  },
  labelCovidRecoveredValue: {
    marginLeft: '10px',
  },
}));

export default useStyles;