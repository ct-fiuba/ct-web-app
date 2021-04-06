import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '10px',
    borderTopStyle: 'inset',
  },
  highRisk: {
    borderTop: '30px solid #ff5252',
  },
  mediumRisk: {
    borderTop: '30px solid #ffdb44',
  },
  lowRisk: {
    borderTop: '30px solid #b5ffcf',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  gridContainer: {
    alignItems: 'center',
  }
});

export default useStyles;