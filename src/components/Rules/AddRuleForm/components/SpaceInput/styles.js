import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  checkboxes: {
    marginTop: '16px',
  },
  titleSpace: {
    marginTop: '28px',
    textAlign: 'center',
  },
  formControlOpenSpace: {
    margin: theme.spacing(1),
    marginRight: '0px',
    width: '-webkit-fill-available',
  },
  labelOpenSpace: {
    marginLeft: '10px',
  },
}));

export default useStyles;
