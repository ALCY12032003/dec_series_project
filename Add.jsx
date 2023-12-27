import React, { Component } from 'react';
import axios from 'axios';
import "./Add.css";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseid: '',
      coursename: '',
      studentname: '',
      studentemail: '',
      enrollmentdate: '',
      duration: '',
    };
  }

  handleCourseIdChange = (event) => {
    this.setState({ courseid: event.target.value });
  };

  handleCourseNameChange = (event) => {
    this.setState({ coursename: event.target.value });
  };

  handleStudentNameChange = (event) => {
    this.setState({ studentname: event.target.value });
  };

  handleStudentEmailChange = (event) => {
    this.setState({ studentemail: event.target.value });
  };

  handleEnrollmentDateChange = (event) => {
    this.setState({ enrollmentdate: event.target.value });
  };

  handleDurationChange = (event) => {
    this.setState({ duration: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      courseid: this.state.courseid,
      coursename: this.state.coursename,
      studentname: this.state.studentname,
      studentemail: this.state.studentemail,
      enrollmentdate: this.state.enrollmentdate,
      duration: this.state.duration,
    };

    axios.post('http://127.0.0.1:8080/post', data);
  };

  render() {
    return (
      <div>
        <div class="wrapper">
          <div class="inner">
            <div class="image-holder">
              <img
                className='o'
                src="https://images.pexels.com/photos/296121/pexels-photo-296121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="placeholder"
              />
            </div>
            <form onSubmit={this.handleSubmit} className="sign-form">
              <label className="sign-label">Course Id</label>
              <div class="form-wrapper">
                <input
                  className="form-control"
                  type="text"
                  value={this.state.courseid}
                  onChange={this.handleCourseIdChange}
                />
              </div>
              <label className="sign-label">Course Name</label>
              <div class="form-wrapper">
                <input
                  className="form-control"
                  type="text"
                  value={this.state.coursename}
                  onChange={this.handleCourseNameChange}
                />
              </div>
              <label className="sign-label">Student Name</label>
              <div class="form-wrapper">
                <input
                  className="form-control"
                  type="text"
                  value={this.state.studentname}
                  onChange={this.handleStudentNameChange}
                />
              </div>
              <label className="sign-label">Student Email</label>
              <div class="form-wrapper">
                <input
                  className="form-control"
                  type="text"
                  value={this.state.studentemail}
                  onChange={this.handleStudentEmailChange}
                />
              </div>
              <label className="sign-label">Enrollment Date</label>
              <div class="form-wrapper">
                <input
                  className="form-control"
                  type="text"
                  value={this.state.enrollmentdate}
                  onChange={this.handleEnrollmentDateChange}
                />
              </div>
              <label className="sign-label">Duration</label>
              <div class="form-wrapper">
                <input
                  className="form-control"
                  type="text"
                  value={this.state.duration}
                  onChange={this.handleDurationChange}
                />
              </div>
              <button className="bjj" type="submit">
                ADD
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Add;
