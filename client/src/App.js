import "./App.css";
import {Typography, Box} from "@mui/material";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import SignupPage from "./pages/signup/SignupPage";
import HomePage from "./pages/Home/Homepage";
import AdminHome from "./pages/admin/AdminHome";
import AuthRouter from "./components/authenticationRouter/AuthRouter";

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
          <Route element={<AuthRouter></AuthRouter>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/admin" element={<AdminHome></AdminHome>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
