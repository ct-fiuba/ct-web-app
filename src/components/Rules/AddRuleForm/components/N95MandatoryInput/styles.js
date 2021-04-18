import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  checkboxes: {
    marginTop: '16px',
  },
  titleN95Mandatory: {
    marginTop: '28px',
    textAlign: 'center',
  },
  formControlN95MandatoryValue: {
    margin: theme.spacing(1),
    marginRight: '0px',
    width: '-webkit-fill-available',
  },
  labelN95MandatoryValue: {
    marginLeft: '10px',
  },
}));

export default useStyles;