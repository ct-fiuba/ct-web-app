import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

export default function SignInAlerts({invalidEmail, invalidPassword, handleCloseInvalidEmail, handleCloseInvalidPassword, emailNotFound, handleCloseEmailNotFound, notAdmin, handleCloseNotAdmin, successPasswordReset, handleCloseSuccessPasswordReset}) {
  return (
    <div>
      <Snackbar open={invalidEmail} autoHideDuration={5000} onClose={handleCloseInvalidEmail}>
        <Alert severity="error" onClose={handleCloseInvalidEmail}>
          <AlertTitle>Error</AlertTitle>
          El email es inválido.
        </Alert>
      </Snackbar>

      <Snackbar open={emailNotFound} autoHideDuration={5000} onClose={handleCloseEmailNotFound}>
        <Alert severity="error" onClose={handleCloseEmailNotFound}>
          <AlertTitle>Error</AlertTitle>
          Email no registrado.
        </Alert>
      </Snackbar>

      <Snackbar open={invalidPassword} autoHideDuration={5000} onClose={handleCloseInvalidPassword}>
        <Alert severity="error" onClose={handleCloseInvalidPassword}>
          <AlertTitle>Error</AlertTitle>
            La contraseña es incorrecta.
        </Alert>
      </Snackbar>

      <Snackbar open={notAdmin} autoHideDuration={5000} onClose={handleCloseNotAdmin}>
        <Alert severity="error" onClose={handleCloseNotAdmin}>
          <AlertTitle>Acceso denegado</AlertTitle>
            El usuario no es administrador del sistema.
        </Alert>
      </Snackbar>

      <Snackbar open={successPasswordReset} autoHideDuration={5000} onClose={handleCloseSuccessPasswordReset}>
        <Alert severity="success" onClose={handleCloseSuccessPasswordReset}>
          <AlertTitle>Email enviado</AlertTitle>
            Se ha enviado un mail a la dirección introducida con los pasos para recuperar la contraseña.
        </Alert>
      </Snackbar>
    </div>
  );
}
