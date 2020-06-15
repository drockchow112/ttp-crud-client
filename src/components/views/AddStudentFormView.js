import React from "react";
import PropTypes from "prop-types";

const AddStudentFormView = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          First Name:{" "}
          <input
            value={props.firstName}
            name="firstName"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Last Name:{" "}
          <input
            value={props.lastName}
            name="lastName"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Email:{" "}
          <input
            value={props.email}
            name="email"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          GPA:{" "}
          <input
            value={props.gpa}
            name="gpa"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <button>Create Student</button>
      </form>
    </div>
  );
};

// AddCampusFormView.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   address: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   imageUrl: PropTypes.string.isRequired
// };

export default AddStudentFormView;
