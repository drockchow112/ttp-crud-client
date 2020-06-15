import React from "react";
import { Link } from "react-router-dom";

const StudentView = props => {
  return (
    <>
      <h1>
        {props.student.firstName} {props.student.lastName}
      </h1>
      <h3>GPA: {props.student.gpa}</h3>
      <h3>Email: {props.student.email}</h3>
      <Link className="edit-link" to={`/students/${props.student.id}/edit`}>
        Edit
      </Link>
    </>
  );
};

export default StudentView;
