import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import Home from "./home-page/HomePage";
import Resume from "./resume/ResumePage";
import NavBar from "./NavBar";

const PageHandler = () => {
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
