import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import "./style.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="dark" bg="dark" sticky="top">
        <Container fluid>
          <Navbar.Brand>
            <Link style={{ color: "white" }} className="brand" to="/">
              David Eldridge.
            </Link>
          </Navbar.Brand>
          <Link style={{ color: "primary" }} to="/">
            Home.
          </Link>
          <Link style={{ color: "green" }} to="/aboutme">
            About Me.
          </Link>
          <Link style={{ color: "primary" }} to="/projects">
            Projects.
          </Link>
          <div className="column" style={{ color: "white" }}>
            <p>Email: d.vincenteldridge@gmail.com</p>
            <p>Phone: 347.469.2996</p>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
