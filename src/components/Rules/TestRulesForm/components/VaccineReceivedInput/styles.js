import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  titleVaccineReceived: {
    marginTop: '28px',
    textAlign: 'center',
  },
  formControlVaccineReceivedValue: {
    margin: theme.spacing(1),
    marginRight: '0px',
    width: '-webkit-fill-available',
  },
  labelVaccineReceivedValue: {
    marginLeft: '10px',
  },
}));

export default useStyles;