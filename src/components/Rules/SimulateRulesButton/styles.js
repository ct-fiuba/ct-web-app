import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  simulateRulesButton: {
    fontWeight: 'bold',
    width: '-webkit-fill-available',
    marginLeft: '5px',
    marginRight: '5px',
  },
  dialogTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '40px',
    marginLeft: '40px',
    marginRight: '40px',
    display: 'flex',
    alignItems: 'center'
  },
  dialogContent: {
    marginBottom: '40px',
    marginLeft: '40px',
    marginRight: '40px',
  },
}));

export default useStyles;