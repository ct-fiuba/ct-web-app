import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControlContagionRisk: {
    margin: theme.spacing(4),
    width: '400px',
  },
  labelContagionRisk: {
    marginLeft: '10px',
  },
  gridContagionRisk: {
    textAlign: 'center',
  },
  optionsContagionRisk: {
    justifyContent: 'center',
  },
  buttonsGrid: {
    textAlign: 'right',
  },
  titleDuration: {
    marginTop: '28px',
    textAlign: 'center',
  },
  checkboxes: {
    marginTop: '16px',
  },
  durationValue: {
    marginTop: '8px',
    width: '-webkit-fill-available',
  },
  formControlDurationCmp: {
    margin: theme.spacing(1),
    width: '-webkit-fill-available',
  },
  labelDurationCmp: {
    marginLeft: '10px',
  },
  titleM2: {
    marginTop: '28px',
    textAlign: 'center',
  },
  m2Value: {
    marginTop: '8px',
    width: '-webkit-fill-available',
  },
  formControlM2Cmp: {
    margin: theme.spacing(1),
    width: '-webkit-fill-available',
  },
  labelM2Cmp: {
    marginLeft: '10px',
  },
  titleSpace: {
    marginTop: '28px',
    textAlign: 'center',
  },
  titleN95Mandatory: {
    marginTop: '28px',
    textAlign: 'center',
  },
  formControlSpaceValue: {
    margin: theme.spacing(1),
    marginRight: '0px',
    width: '-webkit-fill-available',
  },
  formControlN95MandatoryValue: {
    margin: theme.spacing(1),
    marginRight: '0px',
    width: '-webkit-fill-available',
  },
  labelSpaceValue: {
    marginLeft: '10px',
  },
  labelN95MandatoryValue: {
    marginLeft: '10px',
  },
  internalTitles: {
    textAlign: 'center',
  }
}));

export default useStyles;