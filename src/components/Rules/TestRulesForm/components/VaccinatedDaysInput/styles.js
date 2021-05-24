import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  titleVaccinatedDays: {
    marginTop: '27px',
    marginLeft: '10px',
    marginRight: '5px',
    textAlign: 'center',
  },
  vaccinatedDaysValue: {
    marginTop: '8px',
    margin: theme.spacing(1),
    marginRight: '0px',
    width: '-webkit-fill-available',
  },
}));

export default useStyles;