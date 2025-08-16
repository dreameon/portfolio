import React from "react";

function Synopsis({
  overview,
  role,
  roleBreakdown,
  projectTime,
  prototypeLink,
  projectSpecsClass,
}) {
  return (
    <div className="synopsis">
      <div className="overview">
        <h4> Overview </h4>
        <p> {overview} </p>
      </div>
      <div className={`base-project-specs ${projectSpecsClass}`}>
        <div className="project-spec">
          <h4> Role </h4>
          <b> {role} </b>
          <p> {roleBreakdown}</p>
        </div>
        <div className="project-spec">
          <h4> Project Time </h4>
          <p> {projectTime} </p>
        </div>
        <div className="project-spec">
          <u href={prototypeLink}> Prototype Link </u>
        </div>
      </div>
    </div>
  );
}

export default Synopsis;
