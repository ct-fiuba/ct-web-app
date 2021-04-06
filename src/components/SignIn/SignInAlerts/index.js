import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

export default function SignInAlerts(props) {
  return (
    <div>
      <Snackbar open={props.invalidEmail} autoHideDuration={5000} onClose={props.handleCloseInvalidEmail}>
        <Alert severity="error" onClose={props.handleCloseInvalidEmail}>
          <AlertTitle>Error</AlertTitle>
          El email es inválido.
        </Alert>
      </Snackbar>

      <Snackbar open={props.emailNotFound} autoHideDuration={5000} onClose={props.handleCloseEmailNotFound}>
        <Alert severity="error" onClose={props.handleCloseEmailNotFound}>
          <AlertTitle>Error</AlertTitle>
          Email no registrado.
        </Alert>
      </Snackbar>

      <Snackbar open={props.invalidPassword} autoHideDuration={5000} onClose={props.handleCloseInvalidPassword}>
        <Alert severity="error" onClose={props.handleCloseInvalidPassword}>
          <AlertTitle>Error</AlertTitle>
            La contraseña es incorrecta.
        </Alert>
      </Snackbar>

      <Snackbar open={props.notAdmin} autoHideDuration={5000} onClose={props.handleCloseNotAdmin}>
        <Alert severity="error" onClose={props.handleCloseNotAdmin}>
          <AlertTitle>Acceso denegado</AlertTitle>
            El usuario no es administrador del sistema.
        </Alert>
      </Snackbar>

      <Snackbar open={props.successPasswordReset} autoHideDuration={5000} onClose={props.handleCloseSuccessPasswordReset}>
        <Alert severity="success" onClose={props.handleCloseSuccessPasswordReset}>
          <AlertTitle>Email enviado</AlertTitle>
            Se ha enviado un mail a la dirección introducida con los pasos para recuperar la contraseña.
        </Alert>
      </Snackbar>
    </div>
  );
}
