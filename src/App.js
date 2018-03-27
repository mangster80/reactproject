import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';
// import { BrowserRouter, Route } from 'react-router-dom';
// import Login from './Login'

import images from './images';
let {lion, indexPhoto} = images;

class App extends Component {
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
      <div>
        <Navbar color="inverse" light expand="md">
          <NavbarBrand href="/"><img height="150" width="150" src={lion} alt="logo"/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Classes" className="text-danger font-weight-bold">Log In</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
          <Jumbotron>
            <Container>
              <Row>
                <Col>
                  <img width="100%" alt="breakdance" src={indexPhoto}/>
                  <p className="d-flex justify-content-center">
                    <Button
                      tag="a"
                      color="success"
                      size="large"
                      href="http://reactstrap.github.io"
                      target="_blank">
                      View Reactstrap Docs
                    </Button>
                  </p>
                </Col>
              </Row>
            </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
