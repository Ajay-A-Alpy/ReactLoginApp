import React from "react";
import Login from "../../components/login/Login";
import {Box, Grid} from "@mui/material";
import Signup from "../../components/signup/Signup";
function SignupPage() {
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
