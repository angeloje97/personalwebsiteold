import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import Home from "./home-page/home";
import Resume from "./resume/resume";
import NavBar from "./NavBar";

const pageData = require("../data/resumes/programmingResume.json");

const PageHandler = () => {
  console.log(pageData);

  return (
    <Container>
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default PageHandler;
