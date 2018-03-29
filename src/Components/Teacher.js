import React, { Component } from "react";

class Teacher extends Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.teacher.firstname}</h2>
        <p>Here is all your students for today.</p>
        <ol>
          <li>{this.props.student[0].firstname}</li>
          <li>{this.props.student[1].firstname}</li>
          <li>{this.props.student[2].firstname}</li>
          <li>{this.props.student[3].firstname}</li>
          <li>{this.props.student[4].firstname}</li>
        </ol>
      </div>
    );
  }
}

export default Teacher;
