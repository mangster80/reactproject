import React, { Component } from "react";

class Student extends Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.student.firstname}</h2>
        <p>The easiest thing to do is post on
        our <a href="http://forum.kirupa.com">forums</a>.
        </p>
      </div>
    );
  }
}

export default Student
