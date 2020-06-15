import React from "react";
import PropTypes from "prop-types";

const EditStudentFormView = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          Name:{" "}
          <input
            value={props.firstName}
            name="firstName"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Address:{" "}
          <input
            value={props.lastName}
            name="lastName"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          Email:{" "}
          <input
            value={props.email}
            name="email"
            onChange={props.handleChange}
          ></input>
        </div>
        <div>
          GPA:{" "}
          <input
            value={props.gpa}
            name="gpa"
            onChange={props.handleChange}
          ></input>
        </div>
        <button>Edit Student</button>
      </form>
    </div>
  );
};

// EditCampusFormView.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   address: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   imageUrl: PropTypes.string.isRequired
// };

export default EditStudentFormView;
