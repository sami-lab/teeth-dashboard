import React from "react";
import { Grid, Button } from "@material-ui/core";
export default function Dashboard() {
  const teethFamily = [
    "IMPLANT",
    "PROTHESE FIXE",
    "PROVISOIRE",
    "PIVOT",
    "OBTURATION",
    "ENDO",
    "EXTRACTION",
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
                backgroundColor: "#F1D7FD",
                color: "#2d2d2d",
                marginTop: "15px",
                textDecoration: "underline",
                padding: "10px 25px",
              }}
            >
              SOINS COURANTS
            </Button>
          </Grid>
          {/* grid */}
          <Grid item></Grid>
        </Grid>
      </Grid>
      {/* for solde */}
      <Grid item md={2}></Grid>
    </Grid>
  );
}
