import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(2)
  },
  deleteButton: {
    marginTop: '5px',
    color: '#ff4569'
  }
}));

export default useStyles;
