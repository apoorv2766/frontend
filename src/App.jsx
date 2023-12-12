import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Main from "./components/Home/Main";
import Login from "./components/Students/Login";
import TeacherLogin from "./components/TeacherPages/Login";
import SignUp from "./components/Students/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Login />} />
        <Route path="/teacher" element={<TeacherLogin />} />
        <Route path="/studentSignUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
