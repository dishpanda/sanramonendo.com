import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

export default (props) => {
  console.log("Rendering Footer");

  return (
    <footer className="footer mt-auto py-3 bg-light">
      <Container>
        <div className="flex-container-6040">
          <div className="flex-div-60">
            <h3>San Ramon Endodontics</h3>
            <h5>Dr. Nachiket Saoji, DDS, MS</h5>
            <p>
              2817 Crow Canyon Rd #100
              <br />
              San Ramon, CA 94583
              <br />
              Tel (925) 829-5711 • Fax (925) 829-3531
            </p>
            <iframe
              title="Google Maps Location"
              src="https://maps.google.com/maps?q=2817%20Crow%20Canyon%20Rd%20%23100%2C%20San%20Ramon%2C%20CA%2094583&t=&z=13&ie=UTF8&iwloc=&output=embed"
              scrolling="no"
              className="map"
            ></iframe>
            <p>
              <small>
                &copy; {new Date().getFullYear()} San Ramon Endodontics
                <br />
                Website built and designed by{" "}
                <a href="https://dishpanda.github.io/">Rahul Deshpande</a>
                <br />
                Some of the images used on this website are royalty free,
                collected from various sources, including but not limited to{" "}
                <a href="https://unsplash.com/">Unsplash</a> and{" "}
                <a href="https://pexels.com">Pexels</a>.
              </small>
            </p>
          </div>
          <div className="flex-div-40">
            <h3>Site Map</h3>
            <ul className="list-unstyled">
              <li>
                General
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/Contact">Contact Us</Link></li>
                  <li><Link to="/Forms">Patient Forms</Link></li>
                  <li><Link to="/Referral">Refer-A-Patient</Link></li>
                </ul>
              </li>
              <li>
                Procedures
                <ul>
                  <li><Link to="/Procedures/RootCanal">Root Canal Therapy</Link></li>
                  <li><Link to="/Procedures/Retreatment">Endodontic Retreatment</Link></li>
                  <li><Link to="/Procedures/Microsurgery">Microsurgery - Apicoectomy</Link></li>
                  <li><Link to="/Procedures/Fracture">Fracture Detection</Link></li>
                  <li><Link to="/Procedures/Trauma">Trauma</Link></li>
                </ul>
              </li>
              <li>
                Patient Information
                <ul>
                  <li><Link to="/Scheduling">Scheduling</Link></li>
                  <li><Link to="/YourVisit">Your Visit</Link></li>
                  <li><Link to="/FinancialPolicy">Financial Policy</Link></li>
                </ul>
              </li>
              <li>
                Contact Us
                <ul>
                  <li><Link to="/Contact">Contact Info</Link></li>
                  <li><Link to="/Contact">Directions</Link></li>
                  <li><Link to="/Contact">Office Hours</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
