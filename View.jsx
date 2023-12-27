import axios from "axios";
import React, { Component } from "react";
import "./View.css"

class View extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
      <div>
      <div class="bg">
      <table className="styled-table" border={1}>
      <thead>
        <tr class="active-row">
          <th>Course Id</th>
          <th>Course Name</th>
          <th>Student Name</th>
          <th>Student Email</th>
          <th>Enrollment Date</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr class="active-row" key={user.artistid}>
            <td>{user.courseid}</td>
            <td>{user.coursename}</td>
            <td>{user.studentname}</td>
            <td>{user.studentemail}</td>
            <td>{user.enrollmentdate}</td>
            <td>{user.duration}</td>
          </tr>
        ))}
      </tbody>
    </table></div></div>
    );
  }}
  
export default View;