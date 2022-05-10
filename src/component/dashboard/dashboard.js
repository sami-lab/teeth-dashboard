import React, { useState } from 'react';
import {
  Grid,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
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

  const [soinsStandardDialog, setSoinsStandardDialog] = useState(false);
  const [soinsStandard, setSoinsStandard] = useState([]);
  const [soinsComplementriesDialog, setSoinsComplementriesDialog] =
    useState(false);
  const [soinsComplementries, setSoinsComplementries] = useState([]);
  const [soinDialogInput, setSoinDialogInput] = useState({
    region: '',
    category: '',
    soin: '',
  });
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

  const handleSoinDialogClose = () => {
    setSoinsStandardDialog(false);
    setSoinsComplementriesDialog(false);
    setSoinDialogInput({
      region: '',
      category: '',
      soin: '',
    });
  };
  const handleSoinDialogSubmit = () => {
    setSoinDialogInput({
      region: '',
      category: '',
      soin: '',
    });
  };
  const addSoinStandardDialog = (
    <Dialog
      open={soinsStandardDialog}
      onClose={handleSoinDialogClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add Entry</DialogTitle>
      <DialogContent>
        <TextField
          label="Region"
          fullWidth
          value={soinDialogInput.region}
          onChange={(e) =>
            setSoinDialogInput({
              ...soinDialogInput,
              region: e.target.value,
            })
          }
        />
        <TextField
          label="Category"
          fullWidth
          value={soinDialogInput.category}
          onChange={(e) =>
            setSoinDialogInput({
              ...soinDialogInput,
              category: e.target.value,
            })
          }
        />
        <TextField
          label="Soin"
          fullWidth
          value={soinDialogInput.soin}
          onChange={(e) =>
            setSoinDialogInput({
              ...soinDialogInput,
              soin: e.target.value,
            })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSoinDialogClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            setSoinsStandard((en) => [...en, soinDialogInput]);
            setSoinsStandardDialog(false);
            handleSoinDialogSubmit();
          }}
          color="primary"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
  const addSoinComplementriesDialog = (
    <Dialog
      open={soinsComplementriesDialog}
      onClose={handleSoinDialogClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add Entry</DialogTitle>
      <DialogContent>
        <TextField
          label="Region"
          fullWidth
          value={soinDialogInput.region}
          onChange={(e) =>
            setSoinDialogInput({
              ...soinDialogInput,
              region: e.target.value,
            })
          }
        />
        <TextField
          label="Category"
          fullWidth
          value={soinDialogInput.category}
          onChange={(e) =>
            setSoinDialogInput({
              ...soinDialogInput,
              category: e.target.value,
            })
          }
        />
        <TextField
          label="Soin"
          fullWidth
          value={soinDialogInput.soin}
          onChange={(e) =>
            setSoinDialogInput({
              ...soinDialogInput,
              soin: e.target.value,
            })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSoinDialogClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            setSoinsComplementries((en) => [...en, soinDialogInput]);
            setSoinsComplementriesDialog(false);
            handleSoinDialogSubmit();
          }}
          color="primary"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
  return (
    <Grid container direction="column">
      {addSoinStandardDialog}
      {addSoinComplementriesDialog}
      {/* Grid container */}
      <Grid item>
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
                                padding: 0,
                              }}
                              onClick={() => {
                                if (selectedFamily.includes(row + '-' + n)) {
                                  setSelectedFamily((f) =>
                                    f.filter((el) => el !== row + '-' + n)
                                  );
                                } else {
                                  setSelectedFamily((f) => [
                                    ...f,
                                    row + '-' + n,
                                  ]);
                                }
                              }}
                            >
                              {selectedFamily.includes(row + '-' + n) ? (
                                <img
                                  src={
                                    'https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787__480.png'
                                  }
                                  style={{ width: '40px', height: '100%' }}
                                />
                              ) : (
                                <div
                                  style={{ width: '40px', height: '40px' }}
                                ></div>
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell style={{ border: 0 }}></TableCell>
                        {teethGroup1.map((n) => (
                          <TableCell className={classes.teethFamily}>
                            {n}
                          </TableCell>
                        ))}
                      </TableRow>
                      <TableRow>
                        <TableCell style={{ border: 0 }}></TableCell>
                        {teethGroup2.map((n) => (
                          <TableCell className={classes.teethFamily}>
                            {n}
                          </TableCell>
                        ))}
                      </TableRow>
                      {teethFamily.reverse().map((row) => (
                        <TableRow key={row.name}>
                          <TableCell
                            className={classes.teethFamily}
                            component="th"
                            scope="row"
                          >
                            {row}
                          </TableCell>
                          {teethGroup2.map((n, i) => (
                            <TableCell
                              style={{
                                border: '1px solid #2d2d2d',
                                borderLeft: i === 0 ? 0 : '1px solid #2d2d2d',
                                borderRight:
                                  i === teethGroup2.length - 1
                                    ? 0
                                    : '1px solid #2d2d2d',
                                cursor: 'pointer',
                                padding: 0,
                              }}
                              onClick={() => {
                                if (selectedFamily.includes(row + '-' + n)) {
                                  setSelectedFamily((f) =>
                                    f.filter((el) => el === row + '-' + n)
                                  );
                                } else {
                                  setSelectedFamily((f) => [
                                    ...f,
                                    row + '-' + n,
                                  ]);
                                }
                              }}
                            >
                              {selectedFamily.includes(row + '-' + n) ? (
                                <img
                                  src={
                                    'https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787__480.png'
                                  }
                                  style={{ width: '40px', height: '100%' }}
                                />
                              ) : (
                                <div
                                  style={{ width: '40px', height: '40px' }}
                                ></div>
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
      </Grid>
      {/* 2 tables */}
      <Grid item style={{ marginTop: '1em' }}>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Button
                  style={{
                    borderRadius: 0,
                    backgroundColor: 'rgb(109, 232, 201)',
                    color: '#2d2d2d',

                    textDecoration: 'underline',
                  }}
                  endIcon={<AddCircleIcon />}
                  onClick={() => setSoinsStandardDialog(true)}
                >
                  SOINS STANDARDS
                </Button>
              </Grid>
              <Grid item style={{ marginTop: '1em', width: '75%' }}>
                <TableContainer style={{ background: '#F3F4F4' }}>
                  <Table>
                    <colgroup>
                      <col width="25%" />
                      <col width="25%" />
                      <col width="50%" />
                    </colgroup>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          style={{
                            padding: 0,
                            borderRight: '1px dotted #2d2d2d',

                            borderBottom: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        >
                          dents / region
                        </TableCell>
                        <TableCell
                          style={{
                            padding: 0,
                            borderRight: '1px dotted #2d2d2d',

                            borderBottom: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        >
                          categorie
                        </TableCell>
                        <TableCell
                          style={{
                            padding: 0,
                            borderBottom: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        >
                          soin
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {soinsStandard.map((s, i) => (
                        <TableRow key={i}>
                          <TableCell
                            style={{
                              padding: '5px 0',
                              borderBottom: '1px dotted #2d2d2d',
                            }}
                            className={classes.teethFamily}
                          >
                            {s.region}
                          </TableCell>
                          <TableCell
                            style={{
                              padding: '5px 0',
                              border: '1px dotted #2d2d2d',
                            }}
                            className={classes.teethFamily}
                          >
                            {s.category}
                          </TableCell>
                          <TableCell
                            style={{
                              padding: '5px 0',
                              borderBottom: '1px dotted #2d2d2d',
                            }}
                            className={classes.teethFamily}
                          >
                            {s.soin}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell
                          style={{
                            padding: '10px 0px',
                            borderBottom: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        ></TableCell>
                        <TableCell
                          style={{
                            padding: '10px 0px',
                            border: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        ></TableCell>
                        <TableCell
                          style={{
                            padding: '10px 0px',
                            borderBottom: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        ></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          style={{
                            padding: '10px 0px',
                            borderBottom: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        ></TableCell>
                        <TableCell
                          style={{
                            padding: '10px 0px',
                            border: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        ></TableCell>
                        <TableCell
                          style={{
                            padding: '10px 0px',
                            borderBottom: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        ></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          style={{
                            padding: '10px 0px',
                            borderBottom: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        ></TableCell>
                        <TableCell
                          style={{
                            padding: '10px 0px',
                            border: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        ></TableCell>
                        <TableCell
                          style={{
                            padding: '10px 0px',
                            borderBottom: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        ></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Button
                  style={{
                    borderRadius: 0,
                    backgroundColor: 'rgb(109, 232, 201)',
                    color: '#2d2d2d',

                    textDecoration: 'underline',
                  }}
                  endIcon={<AddCircleIcon />}
                  onClick={() => setSoinsComplementriesDialog(true)}
                >
                  SOINS COMPLEMENTRIES
                </Button>
              </Grid>
              <Grid item style={{ marginTop: '1em', width: '75%' }}>
                <TableContainer style={{ background: '#F3F4F4' }}>
                  <Table>
                    <colgroup>
                      <col width="25%" />
                      <col width="25%" />
                      <col width="50%" />
                    </colgroup>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          style={{
                            padding: 0,
                            borderRight: '1px dotted #2d2d2d',

                            borderBottom: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        >
                          dents / region
                        </TableCell>
                        <TableCell
                          style={{
                            padding: 0,
                            borderRight: '1px dotted #2d2d2d',

                            borderBottom: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        >
                          categorie
                        </TableCell>
                        <TableCell
                          style={{
                            padding: 0,
                            borderBottom: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        >
                          soin categorie
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {soinsComplementries.map((s, i) => (
                        <TableRow key={i}>
                          <TableCell
                            style={{
                              padding: '5px 0',
                              borderBottom: '1px dotted #2d2d2d',
                            }}
                            className={classes.teethFamily}
                          >
                            {s.region}
                          </TableCell>
                          <TableCell
                            style={{
                              padding: '5px 0',
                              border: '1px dotted #2d2d2d',
                            }}
                            className={classes.teethFamily}
                          >
                            {s.category}
                          </TableCell>
                          <TableCell
                            style={{
                              padding: '5px 0',
                              borderBottom: '1px dotted #2d2d2d',
                            }}
                            className={classes.teethFamily}
                          >
                            {s.soin}
                          </TableCell>
                        </TableRow>
                      ))}
                      <TableRow>
                        <TableCell
                          style={{
                            padding: '10px 0px',
                            borderBottom: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        ></TableCell>
                        <TableCell
                          style={{
                            padding: '10px 0px',
                            border: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        ></TableCell>
                        <TableCell
                          style={{
                            padding: '10px 0px',
                            borderBottom: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        ></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          style={{
                            padding: '10px 0px',
                            borderBottom: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        ></TableCell>
                        <TableCell
                          style={{
                            padding: '10px 0px',
                            border: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        ></TableCell>
                        <TableCell
                          style={{
                            padding: '10px 0px',
                            borderBottom: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        ></TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          style={{
                            padding: '10px 0px',
                            borderBottom: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        ></TableCell>
                        <TableCell
                          style={{
                            padding: '10px 0px',
                            border: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        ></TableCell>
                        <TableCell
                          style={{
                            padding: '10px 0px',
                            borderBottom: '1px dotted #2d2d2d',
                          }}
                          className={classes.teethFamily}
                        ></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
