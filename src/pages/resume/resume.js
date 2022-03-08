import React from "react";

const Resume = ({ resume }) => {
  return (
    <React.Fragment>
      <h3>{resume.resumeName}</h3>
      <section>
        <h4>Objective</h4>
        <p>{resume.objective}</p>
      </section>
      {resume.languages && ( //If the resume contains programming languages
        <section>
          <h4>Programming Languages</h4>
          {resume.languages.map((language) => (
            <Language language={language} />
          ))}
        </section>
      )}

      {resume.experiences && (
        <section>
          <h4>Experience</h4>
          {resume.experiences.map((experience) => {
            return <Experience experience={experience} />;
          })}
        </section>
      )}

      {resume.computerSkills && (
        <section>
          <h4>Computer Skills</h4>
          <ComputerSkills computerSkills={resume.computerSkills} />
        </section>
      )}

      {resume.experienceInProgramming && (
        <section>
          <h4>Experience in Programming</h4>
          <p>{resume.experienceInProgramming}</p>
        </section>
      )}

      {resume.references && (
        <section>
          <h4>References</h4>
          {resume.references.map((reference) => {
            return <Reference reference={reference} />;
          })}
        </section>
      )}
    </React.Fragment>
  );
};

const Language = ({ language }) => {
  const { languageName, experience } = language;
  return (
    <React.Fragment>
      <p>
        {languageName} : {experience}
      </p>
    </React.Fragment>
  );
};

const Experience = ({ experience }) => {
  const { jobTitle, from, to, description } = experience;
  return (
    <React.Fragment>
      <h5>{jobTitle}</h5>
      <p>
        {from} to {to}
      </p>
      <p>{description}</p>
    </React.Fragment>
  );
};

const ComputerSkills = ({ computerSkills }) => {
  return (
    <p>
      Profficient in
      {computerSkills.map((skill) => {
        return `, ${skill}`;
      })}
      .
    </p>
  );
};

const Reference = ({ reference }) => {
  const { referenceName, referenceContactInformation } = reference;
  return (
    <React.Fragment>
      <p>
        Name: {referenceName}, Contact Information:{" "}
        {referenceContactInformation}
      </p>
    </React.Fragment>
  );
};

export default Resume;
