import React from "react";
import "./styles/AllStudentsView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = props => {
  if (!props.allStudents.length) {
    return <div className="all-students">There are no students</div>;
  }

  return (
    <>
      <Link to={"/students/new"}>
        <h3>Add Student</h3>
      </Link>
      <div>
        <div className="all-students">
          {props.allStudents.map(student => (
            <div key={student.id} className="student">
              <Link to={`/students/${student.id}`}>
                <h1>
                  {student.firstName} {student.lastName}
                </h1>
              </Link>
              <img src={student.imageUrl} width="200px" alt={student.name} />
              <button onClick={() => props.handleDelete(student.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllStudentsView;
