import { Container } from "@mui/material";
import Navbar from "./assets/components/navbar/Navbar";
import Login from "./assets/components/view/login";
import Register from "./assets/components/view/Register";
import Home from "./assets/components/view/Home";
import { Route, Routes } from "react-router-dom";
import ErrorLog from "./assets/components/view/Errorlogin";


const navLinks = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "Login",
    path: "/login",
  },
  {
    title: "ErroLog",
    path: "/src/assets/components/view/Errorlogin.jsx",
  },
  {
    title: "Register",
    path: "/src/assets/components/view/Register.jsx",
  },
];

export default function App() {
  return (
    <>
      <Navbar navLinks={navLinks}/>
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/errorlog" element={<ErrorLog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </>
  );
}
