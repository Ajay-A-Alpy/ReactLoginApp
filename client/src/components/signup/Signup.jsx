import React from "react";
import {Box, Paper, Typography, Button} from "@mui/material";
import "../signup/signup.css";
import TextField from "@mui/material/TextField";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useEffect} from "react";
function Signup() {
  const navigate = useNavigate();
  const initialData = {
    name: "",
    email: "",
    mobile: "",
    password: "",
  };
  const [inputData, setInputData] = useState(initialData);
  const [errorMsg, setErrorMsg] = useState("");
  const {name, email, mobile, password} = inputData;
  const [isUser, setIsUser] = useState(true);
  const [db, setDb] = useState([]);
  useEffect(() => {
    const localDb = localStorage.getItem("localDb");
    if (!localDb) {
      localStorage.setItem("localDb", []);
    } else {
      setDb(JSON.parse(localDb));
    }
  }, []);

  const onInputChange = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    console.log(e.target.value);
    setInputData({...inputData, [name]: value});
    setErrorMsg("");
  };
  const handleSubmit = () => {
    if (name && email && mobile && password) {
      db &&
        db.forEach((user) => {
          if (user.email === email) {
            setErrorMsg(" Email id Already Exists");
            setIsUser(true);
            console.log("dddddddddddd");
          } else if (user.mobile === mobile) {
            setErrorMsg(" Mobile number  Already Exists");
            setIsUser(true);
          } else {
            setIsUser(false);
          }
        });

      if (db.length === 0) {
        setDb(db.push(inputData));
        localStorage.setItem("localDb", JSON.stringify(db));
        localStorage.setItem(
          "logStatus",
          JSON.stringify({logged: "true", currentUser: name})
        );
        navigate("/");
      }

      if (!isUser) {
        setDb(db.push(inputData));
        localStorage.setItem("localDb", JSON.stringify(db));
        localStorage.setItem(
          "logStatus",
          JSON.stringify({logged: "true", currentUser: name})
        );
        navigate("/");
      }
    } else {
      setErrorMsg("Please fill all the details");
    }
  };
  return (
    <Box>
      <Paper className="signup" elevation={20}>
        <Box sx={{textAlign: "center"}}>
          <Typography variant="h4">SIGNUP</Typography>
          <Typography variant="h6" color="red">
            {errorMsg}
          </Typography>
        </Box>
        <Box className="login_body">
          <TextField
            autoFocus
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            name="name"
            onChange={onInputChange}
            sx={{marginTop: "2rem"}}
          ></TextField>

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            autoFocus
            value={email}
            name="email"
            onChange={onInputChange}
            sx={{marginTop: "2rem"}}
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Mobile"
            variant="outlined"
            fullWidth
            autoFocus
            value={mobile}
            name="mobile"
            onChange={onInputChange}
            sx={{marginTop: "2rem"}}
          ></TextField>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            autoFocus
            name="password"
            value={password}
            onChange={onInputChange}
            sx={{marginTop: "2rem"}}
          ></TextField>
          <Button
            variant="outlined"
            sx={{marginTop: "2rem"}}
            onClick={handleSubmit}
          >
            create
          </Button>
          <Box sx={{marginTop: "2rem"}}>
            <Typography>Already have an account ?</Typography>{" "}
            <Typography
              onClick={() => {
                navigate("/login");
              }}
              sx={{cursor: "pointer"}}
            >
              login now
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Signup;
