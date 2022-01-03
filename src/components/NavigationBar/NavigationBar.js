import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import logo from "../../images/logo.png";

const HoverDropDown = ({ children, ...rest }) => {
  const [show, setShow] = useState(false);

  return (
    <NavDropdown
      {...rest}
      show={show}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
    </NavDropdown>
  );
};

export default (props) => {
  return (
    <div className="navbar-align">
      <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
        <img src={logo} className="logo" alt="Logo of San Ramon Endodontics" />
      </Link>
      <div class="top">
        <div>
          <h2>Dr. Nachiket Saoji, DDS, MS</h2>
          <p class="address">
            2817 Crow Canyon Rd
            <br />
            Suite 100
            <br />
            San Ramon, CA 94583
          </p>
          <div className="telfax">
            <a href="tel:9258295711"> Tel: (925) 829-5711</a> <br />
            <a href="tel:9258293531"> FAX: (925) 829-3531</a>
          </div>
        </div>
      </div><br/>
      <Navbar collapseOnSelect expand="xl" className="navigationBar">
        <Navbar.Brand href="/">
          <FontAwesomeIcon icon={faHome} /> Home
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="ml-auto"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/About" style={{ textDecoration: "none" }}>
              <Nav.Link href="/About">Meet The Doctor</Nav.Link>
            </Link>
            <HoverDropDown
              title="Patient Information"
              id="basic-nav-dropdown"
              style={{ color: "rgba(0,0,0,1)" }}
            >
              <NavDropdown.Item as={NavLink} href="/#/Scheduling">
                Scheduling
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} href="/#/YourVisit">
                Your Visit
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} href="/#/FinancialPolicy">
                Financial Policy
              </NavDropdown.Item>
            </HoverDropDown>

            <Link to="/Forms" style={{ textDecoration: "none" }}>
              <Nav.Link href="/Forms">Patient Forms</Nav.Link>
            </Link>

            <Link to="/Referral" style={{ textDecoration: "none" }}>
              <Nav.Link href="/Referral">Refer-A-Patient</Nav.Link>
            </Link>

            <HoverDropDown
              title="Procedures"
              id="basic-nav-dropdown"
              style={{ color: "rgba(0,0,0,1)" }}
              onMouseEnter
            >
              <NavDropdown.Item as={NavLink} href="/#/Procedures/RootCanal">
                Root Canal Therapy
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} href="/#/Procedures/Retreatment">
                Endodontic Retreatment
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} href="/#/Procedures/Microsurgery">
                Microsurgery - Apicoectomy
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} href="/#/Procedures/Fracture">
                Fracture Detection
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} href="/#/Procedures/Trauma">
                Trauma
              </NavDropdown.Item>
            </HoverDropDown>

            <Link to="/Contact" style={{ textDecoration: "none" }}>
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
