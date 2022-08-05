import React, {useState} from "react";
import {Box, Paper, Typography, Button} from "@mui/material";
import "../login/Login.css";
import TextField from "@mui/material/TextField";
import {useNavigate, Link} from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const initialState = {
    name: "",
    password: "",
  };
  const [inputData, setInputData] = useState(initialState);
  const [errorMsg, setErrorMsg] = useState("");
  const {name, password} = inputData;
  const onInputChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setInputData({...inputData, [name]: value});

    setErrorMsg("");
  };
  const handleSubmit = () => {
    if (name && password) {
      let db = localStorage.getItem("localDb");
      if (db) {
        db = JSON.parse(db);
      }

      if (name === "admin" && password === "admin") {
        localStorage.setItem(
          "logStatus",
          JSON.stringify({logged: "true", currentUser: "Admin"})
        );
        navigate("/admin");
      }
      db &&
        db.forEach((user) => {
          if (user.name === name && user.password === password) {
            localStorage.setItem(
              "logStatus",
              JSON.stringify({logged: "true", currentUser: user.name})
            );
            navigate("/");
          } else {
            setErrorMsg("Invalid Credentials");
          }
        });
    } else {
      setErrorMsg("Please fill the details");
    }
  };

  return (
    <Box>
      <Paper className="login" elevation={20}>
        <Box sx={{textAlign: "center"}}>
          <Typography variant="h4" className="titleName">
            LOGIN
          </Typography>
          <Typography variant="h6" color="red">
            {errorMsg}
          </Typography>
        </Box>
        <Box className="login_body">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            fullWidth
            sx={{marginTop: "2rem"}}
            name="name"
            value={name}
            onChange={onInputChange}
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            value={password}
            name="password"
            onChange={onInputChange}
            sx={{marginTop: "2rem"}}
          ></TextField>
          <Button
            variant="outlined"
            sx={{marginTop: "2rem"}}
            onClick={handleSubmit}
          >
            Login
          </Button>
          <Box sx={{marginTop: "2rem"}}>
            <Typography>Dont have an account ?</Typography>{" "}
            <Typography
              onClick={() => {
                navigate("/signup");
              }}
              sx={{cursor: "pointer"}}
            >
              create now
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Login;
