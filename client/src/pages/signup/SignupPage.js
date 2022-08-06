import React, {useEffect} from "react";

import {Box, Grid} from "@mui/material";
import Signup from "../../components/signup/Signup";
import {useNavigate} from "react-router-dom";
function SignupPage() {
  const navigate = useNavigate();
  useEffect(() => {
    let logStatus = localStorage.getItem("logStatus");
    if (logStatus) {
      navigate("/");
    }
  }, []);
  return (
    <Box>
      <Grid container sx={{height: "100vh"}}>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          sx={{margin: "auto", padding: "1rem"}}
        >
          <Signup></Signup>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SignupPage;
