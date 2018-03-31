import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Teacher from "./Teacher";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import images from '../images';
let {lion} = images;

class Main extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <HashRouter>
      <div className="bg-warning">
        <div className="container border">
          <Navbar color="inverse" light={true} expand="md">
            <NavbarBrand href="/"><img height="150" width="150" src={lion} alt="logo"/></NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar={true}>
              <Nav className="ml-auto" navbar={true}>
                <NavItem>
                  <NavLink exact={true} to="/" active="active">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/student">Student</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/teacher">Teacher</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <div className="content">
            <Route exact={true} path="/" component={Home}/>
            <Route path="/student" component={Student}/>
            <Route path="/teacher" component={Teacher}/>
          </div>
        </div>
      </div>
    </HashRouter>
    );
  }
}

export default Main;
