import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: '900px',
    height: '500px',
    margin: '60px',
  },
  header: {
    marginBottom: '20px',
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    display: 'block',
    height: 'fit-content',
    textAlign: 'right'
  },
}));

export default useStyles;