import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  establishmentCard: {
    minWidth: 275,
    margin: '10px',
    backgroundColor: '#edf5ff',
  },
  title: {
    fontSize: 14,
  },
  gridContainer: {
    alignItems: 'center',
  },
  accordion: {
    width: '100%',
    marginTop: '10px',
    backgroundColor: '#c9e1ff',
  },
  detalleEspaciosTitle: {
    fontWeight: 'bold',
  }
});

export default useStyles;