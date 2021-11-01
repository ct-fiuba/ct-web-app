import React from 'react';
import { Card, CircularProgress, Grid, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper} from '@material-ui/core';
import useStyles from './styles';

export default function EditVaccinesTable() {
  const classes = useStyles();
  const result = true;
  const loading = false;

  function createData(name, doses, button) {
    return { name, doses, button };
  }

  const rows = [
    createData('Pfizer', 2, 'X'),
    createData('AstraZeneca', 2, 'X'),
    createData('Covishield', 3, 'X'),
  ];

  return (
    <div>
      { result && <Card className={classes.root}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.headers}>Nombre de la vacuna</TableCell>
                    <TableCell className={classes.headers} align="right">Cantidad de Dosis</TableCell>
                    <TableCell className={classes.headers} align="right">Eliminar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.doses}</TableCell>
                      <TableCell align="right">{row.button}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Card>
      }
      { loading &&
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} className={classes.gridProgress}>
            <CircularProgress />
          </Grid>
        </Grid>
      }
    </div>
  );
}
