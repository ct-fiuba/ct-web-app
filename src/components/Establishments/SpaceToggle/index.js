import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import useStyles from './styles';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';
import * as establishmentsService from '../../../services/establishmentsService';
import * as sessionUtils from '../../../utils/sessionUtils';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 60,
    height: 28,
    padding: 0,
    margin: theme.spacing(1),
    paddingBottom: 2
  },
  switchBase: {
    padding: 0,
    '&$checked': {
      transform: 'translateX(33px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 26,
    height: 26,
    marginTop: 1
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default function SpaceToggle({ spaceId, establishmentId, isEnabled, refreshEstablishments }) {
  const classes = useStyles();
  const [enabled, setEnabled] = React.useState(isEnabled);
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleConfirmModal = async () => {
    handleCloseModal();
    const res = await establishmentsService.updateSpace(spaceId, { establishmentId, enabled: !enabled });
    if (res.status === 201) {
      setEnabled(!enabled);
      await refreshEstablishments();
    } else {
      sessionUtils.signOut();
    }
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleToggleChange = () => {
    handleOpenModal();
  };

  return (
    <div>
      <FormGroup className={classes.formGroup}>
        <FormControlLabel
          control={<IOSSwitch checked={enabled} onChange={handleToggleChange} name="checkedEnabled" />}
          label="Habilitar/Deshabilitar espacio"
        />
        <Tooltip className={classes.tooltips} placement="right" title={<span className={classes.tooltipsText}>Los espacios deshabilitados no pueder recibir visitas</span>}>
          <HelpIcon color="action" fontSize="small"></HelpIcon>
        </Tooltip>
      </FormGroup>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
      >
        <DialogTitle>{`¿Estás seguro que queres ${enabled ? 'deshabilitar' : 'habilitar'} el espacio?`}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary" autoFocus>
            Cancelar
          </Button>
          <Button onClick={handleConfirmModal} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
