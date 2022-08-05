import React, {useEffect, useState} from "react";

import {Box, Grid, Paper, Typography} from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import {useNavigate} from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
function AdminHome() {
  const navigate = useNavigate();
  const [localDb, setLocalDb] = useState([]);

  useEffect(() => {
    let logStatus = localStorage.getItem("logStatus");
    if (!logStatus) {
      navigate("/login");
    }

    let db = localStorage.getItem("localDb");
    if (db) {
      db = JSON.parse(db);
      setLocalDb(db);
    }
  }, []);
  return (
    <Box>
      <Grid container sx={{backgroundColor: "yellow"}}>
        <Grid item xs={12} sm={12} md={12}>
          <Navbar admin={true}></Navbar>
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{marginX: "auto"}}></Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={6} sx={{marginX: "auto"}}>
        <TableContainer
          component={Paper}
          sx={{
            marginX: "auto",
            marginY: "3rem",
            width: "70%",
            backgroundColor: "",
            maxHeight: "20rem",
            overflowY: "auto",
          }}
          elevation={20}
        >
          <Typography variant="h5" sx={{textAlign: "start", display: "block"}}>
            USER LIST
          </Typography>
          <Table
            aria-label="simple table"
            sx={{
              textAlign: "center",
              backgroundColor: "#C5C6C7",
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Sl No</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Mobile</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {localDb.map((row, i) => (
                <TableRow
                  key={row.mobile}
                  sx={{"&:last-child td, &:last-child th": {border: 0}}}
                >
                  <TableCell component="th" scope="row">
                    {i + 1}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.mobile}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Grid item xs={12} sm={12} md={12}>
          {localDb.length === 0 ? (
            <Typography
              variant="h5"
              sx={{textAlign: "center", display: "block"}}
            >
              No users are available
            </Typography>
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default AdminHome;
