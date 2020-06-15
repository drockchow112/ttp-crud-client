import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllStudentsThunk, deleteStudentThunk } from "../../thunks";
import AllStudentsView from "../views/AllStudentsView";

class AllStudentsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  handleDelete = id => {
    this.props.deleteStudent(id);
  };

  render() {
    return (
      <AllStudentsView
        allStudents={this.props.allStudents}
        handleDelete={this.handleDelete}
      />
    );
  }
}

const mapState = state => {
  console.log(state);
  return {
    allStudents: state.allStudents
  };
};

const mapDispatch = dispatch => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteStudent: id => dispatch(deleteStudentThunk(id))
  };
};

export default connect(mapState, mapDispatch)(AllStudentsContainer);
