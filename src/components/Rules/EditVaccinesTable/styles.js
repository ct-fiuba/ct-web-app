import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 800,
    margin: '10px',
    borderTopStyle: 'inset',
    borderTop: '5px solid #b5ffcf',
  },
  gridContainer: {
    alignItems: 'center',
  },
  gridProgress: {
    textAlign: 'center',
  },
  headers: {
    fontWeight: 'bold',
  }
});

export default useStyles;
