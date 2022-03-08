import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import Home from "./home-page/HomePage";
import Resume from "./resume/ResumePage";
import Programming from "./programming-page/ProgrammingPage";
import NavBar from "./NavBar";

const PageHandler = () => {
  return (
    <Container>
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/programming" element={<Programming />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default PageHandler;
