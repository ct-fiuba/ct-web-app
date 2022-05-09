import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '10px',
    borderTopStyle: 'inset',
    borderTop: '5px solid #b5ffcf',
  },
  grid: {
    //alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  gridContainer: {
    alignItems: 'center',
  },
  gridProgress: {
    textAlign: 'center',
  },
});

export default useStyles;