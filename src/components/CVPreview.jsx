import React, { forwardRef } from "react";
const CVPreview = forwardRef(({ cvData }, ref) => {
  const { personal, education, experience, skills } = cvData;

  return (
    <div className="preview" ref={ref}>
      <h2>{personal.name}</h2>
      <p>
        {personal.email} | {personal.phone}
      </p>
      <p>
        {personal.linkedin} | {personal.github}
      </p>

      <h3>Education</h3>
      {education.map((edu, idx) => (
        <div key={idx}>
          <strong>{edu.school}</strong> — {edu.field} ({edu.year})
        </div>
      ))}

      <h3>Experience</h3>
      {experience.map((exp, idx) => (
        <div key={idx}>
          <strong>{exp.company}</strong> — {exp.role} ({exp.duration})
          <p>{exp.desc}</p>
        </div>
      ))}

      <h3>Skills</h3>
      <ul>
        {skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
});

export default CVPreview;
