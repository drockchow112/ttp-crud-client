import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchStudentThunk, editStudentThunk } from "../../thunks";
import { connect } from "react-redux";
import { EditStudentFormView } from "../views";

class EditStudentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNname: "",
      lastName: "",
      email: "",
      gpa: ""
    };
  }

  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id).then(({ payload }) => {
      this.setState(payload);
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.props.editStudent(id, this.state);
    this.props.history.push(`/student/${id}`);
  };

  render() {
    return (
      <EditStudentFormView
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        email={this.state.email}
        gpa={this.state.gpa}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapState = state => {
  return { campus: state.campus };
};

const mapDispatch = dispatch => {
  return {
    fetchStudent: id => dispatch(fetchStudentThunk(id)),
    editStudent: (id, student) => dispatch(editStudentThunk(id, student))
  };
};

// EditCampusFormContainer.propTypes = {
//   fetchCampus: PropTypes.func.isRequired,
//   editCampus: PropTypes.func.isRequired
// };

export default connect(mapState, mapDispatch)(EditStudentFormContainer);
