import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  checkboxes: {
    marginTop: '16px',
  },
  titleVaccinated: {
    marginTop: '28px',
    textAlign: 'center',
  },
  formControlVaccinatedValue: {
    margin: theme.spacing(1),
    marginRight: '0px',
    width: '-webkit-fill-available',
  },
  labelVaccinatedValue: {
    marginLeft: '10px',
  },
}));

export default useStyles;