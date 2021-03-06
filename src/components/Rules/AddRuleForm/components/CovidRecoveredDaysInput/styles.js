import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  checkboxesSecondary: {
    marginTop: '16px',
    marginLeft: '40px',
  },
  titleCovidRecoveredDays: {
    marginTop: '20px',
    marginLeft: '10px',
    marginRight: '5px',
    textAlign: 'center',
  },
  covidRecoveredDaysValue: {
    marginTop: '8px',
    margin: theme.spacing(1),
    marginRight: '50px',
    width: '-webkit-fill-available',
  },
}));

export default useStyles;