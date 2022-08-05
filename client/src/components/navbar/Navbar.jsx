import React from "react";
import {Grid} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {useNavigate} from "react-router-dom";
function Navbar({name, admin}) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    let isConfirm = window.confirm(" Are you sure want to logout ? ");
    if (isConfirm) {
      localStorage.removeItem("logStatus");
      navigate("/login");
    }
  };
  return (
    <Grid>
      <Box sx={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr: 2}}
            ></IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{flexGrow: 1, display: {xs: "hidden", sm: "block"}}}
            >
              {admin ? "DASHBOARD" : "HOME"}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{flexGrow: 1, display: {xs: "none", sm: "block"}}}
            >
              {admin ? "ADMIN" : name.toUpperCase()}
            </Typography>
            <Button
              color="inherit"
              onClick={handleLogOut}
              sx={{right: {xs: "0px"}}}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
}

export default Navbar;
