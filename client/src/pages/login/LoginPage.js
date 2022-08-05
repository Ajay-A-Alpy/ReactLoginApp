import React, {useEffect} from "react";
import Login from "../../components/login/Login";
import {Box, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
function LoginPage() {
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
          <Login></Login>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LoginPage;
