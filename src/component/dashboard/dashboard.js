import React, { useState } from 'react';
import {
  Grid,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
const useStyles = makeStyles((theme) => ({
  teethFamily: {
    fontSize: '10px',
    textAlign: 'center',
    border: 0,
  },
}));
export default function Dashboard() {
  const classes = useStyles();
  const [selectedFamily, setSelectedFamily] = useState([]);

  const teethFamily = [
    'IMPLANT',
    'PROTHESE FIXE',
    'PROVISOIRE',
    'PIVOT',
    'OBTURATION',
    'ENDO',
    'EXTRACTION',
  ];
  const teethGroup1 = [
    18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28,
  ];
  const teethGroup2 = [
    48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38,
  ];

  return (
    <Grid container>
      {/* for image */}
      <Grid item md={2}></Grid>
      {/* for grid */}
      <Grid item md={8}>
        <Grid container direction="column">
          {/* SOINS */}
          <Grid item container justifyContent="center">
            <Button
              style={{
                borderRadius: 0,
                backgroundColor: '#F1D7FD',
                color: '#2d2d2d',
                marginTop: '15px',
                textDecoration: 'underline',
                padding: '10px 25px',
              }}
            >
              SOINS COURANTS
            </Button>
          </Grid>
          {/* grid */}
          <Grid item>
            <TableContainer>
              <Table>
                <TableBody>
                  {teethFamily.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell
                        className={classes.teethFamily}
                        component="th"
                        scope="row"
                      >
                        {row}
                      </TableCell>
                      {teethGroup1.map((n, i) => (
                        <TableCell
                          style={{
                            border: '1px solid #2d2d2d',
                            borderLeft: i === 0 ? 0 : '1px solid #2d2d2d',
                            borderRight:
                              i === teethGroup1.length - 1
                                ? 0
                                : '1px solid #2d2d2d',
                            cursor: 'pointer',
                          }}
                          onClick={() => {
                            if (selectedFamily.includes(row + '-' + n)) {
                              setSelectedFamily((f) =>
                                f.filter((el) => el === row + '-' + n)
                              );
                            } else {
                              setSelectedFamily((f) => [...f, row + '-' + n]);
                            }
                          }}
                        >
                          {selectedFamily.includes(row + '-' + n) && (
                            <CheckBoxIcon />
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
      {/* for solde */}
      <Grid item md={2}></Grid>
    </Grid>
  );
}
