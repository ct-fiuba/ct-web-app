import React from 'react';
import { Card, CircularProgress, Grid, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';

export default function EditVaccinesTable({vaccines, deleteVaccine}) {
  const classes = useStyles();

  function createData(vaccine) {
    return { name: vaccine.name, doses: vaccine.shotsCount, _id: vaccine._id };
  }

  async function deleteRow(vaccineId) {
    return await deleteVaccine(vaccineId)
  }

  return (
    <div>
      { vaccines && vaccines.length !== 0 &&
      <Card className={classes.root}>
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
                  {vaccines.map(createData).map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.doses}</TableCell>
                      <TableCell align="right">
                        <Button size="small" color="secondary" onClick={(e) => deleteRow(row._id)}>
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Card>
      }
      { vaccines === undefined &&
        <Card className={classes.root}>
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} className={classes.gridProgress}>
              <CircularProgress />
            </Grid>
          </Grid>
        </Card>
      }
    </div>
  );
}
