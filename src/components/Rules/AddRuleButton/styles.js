import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  addButton: {
    fontWeight: 'bold',
    width: '-webkit-fill-available',
    margin: '5px',
  },
  dialogTitle: {
    marginTop: '40px',
    marginLeft: '40px',
    marginRight: '40px',
  },
  dialogContent: {
    marginBottom: '40px',
    marginLeft: '40px',
    marginRight: '40px',
  },
}));

export default useStyles;