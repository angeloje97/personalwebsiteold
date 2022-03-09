import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";

import Home from "./home-page/HomePage";
import Resume from "./resume/ResumePage";
import Programming from "./programming-page/ProgrammingPage";
import MotionGraphics from "./motion-graphics-page/MotionGraphics";
import GraphicDesign from "./graphic-design-page/GraphicDesign";
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
          <Route path="/motiongraphics" element={<MotionGraphics />} />
          <Route path="/graphicdesign" element={<GraphicDesign />} />
        </Routes>
      </Router>
    </Container>
  );
};

export default PageHandler;
