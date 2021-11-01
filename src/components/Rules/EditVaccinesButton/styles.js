import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  editVaccinesButton: {
    fontWeight: 'bold',
    width: '-webkit-fill-available',
    marginLeft: '5px',
    marginRight: '5px',
    marginTop: '15px',
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
