import React, {useEffect, useState} from "react";

import {Box, Grid, Paper, Typography} from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import {useNavigate} from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  useEffect(() => {
    let logStatus = localStorage.getItem("logStatus");
    if (!logStatus) {
      navigate("/login");
    } else {
      logStatus = JSON.parse(logStatus);
      setName(logStatus.currentUser);
      if (logStatus.currentUser == "Admin") {
        navigate("/admin");
      }
    }
  }, []);
  return (
    <Box>
      <Grid container sx={{height: "100vh", backgroundColor: "#c2dde6"}}>
        <Grid item xs={12} sm={12} md={12}>
          <Navbar name={name} admin={false}></Navbar>
        </Grid>
        <Grid item xs={11} sm={11} md={6} sx={{marginX: "auto"}}>
          <Paper
            sx={{
              height: "5rem",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              backgroundColor: "#C34EA7",
            }}
            elevation={16}
          >
            <Typography variant="h5" color="white">
              Welcome
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomePage;
