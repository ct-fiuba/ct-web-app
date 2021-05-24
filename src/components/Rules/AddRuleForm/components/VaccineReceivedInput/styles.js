import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  checkboxesSecondary: {
    marginTop: '16px',
    marginLeft: '40px',
  },
  titleVaccineReceived: {
    marginTop: '28px',
    textAlign: 'center',
  },
  formControlVaccineReceivedValue: {
    margin: theme.spacing(1),
    marginRight: '50px',
    width: '-webkit-fill-available',
  },
  labelVaccineReceivedValue: {
    marginLeft: '10px',
  },
}));

export default useStyles;