import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "../Components/Home";
import Teacher from "../Components/Teacher";
import Student from "../Components/Student";
import Classes from "../Components/Classes";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Lion Dance School</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/teacher">Teacher</NavLink></li>
            <li><NavLink to="/student">Student</NavLink></li>
            <li><NavLink to="/classes">Classes</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/teacher" render={()=><Teacher student={this.props.student} teacher={this.props.teacher}/>}/>
            <Route path="/student" render={()=><Student student={this.props.student} teacher={this.props.teacher}/>}/>
            <Route path="/Classes" component={Classes}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
