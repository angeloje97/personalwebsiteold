import React from "react";

import Resume from "./Resume";
// const path = require("path");
// const resume = require(path.resolve(
//   __dirname,
//   "../../data/resumes/programmingResume.json"
// ));

// console.log(resume);

const resumes = require("../../data/resumes/resumes.json");

const ResumePage = () => {
  return (
    <React.Fragment>
      {resumes.map((resume) => {
        return <Resume resume={resume} />;
      })}
    </React.Fragment>
  );
};

export default ResumePage;
