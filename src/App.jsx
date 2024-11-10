import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Nav from "./components/Nav";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Login2 from "./components/Login2";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signup2 from "./components/Signup2";
import "./App.css";
import "./styles/nav.css";
import "./styles/search.css";
import "./styles/jobs.css";
import "./styles/register.css";
import "./styles/login.css";
import "./styles/home.css";
import "./styles/footer.css";
import "./styles/signup1.css";
import "./styles/signup2.css";//emindi backend lo thappu ankunta agu ra nen chustuna kadha madyalo raku
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/jobseekers" element={<Login />} />
        <Route path="/login/recruiters" element={<Login2 />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/signup/recruiters" element={<Signup />} />
        <Route path="/signup/jobseekers" element={<Signup2 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
