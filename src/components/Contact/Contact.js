import React from "react";
import { Container } from "react-bootstrap";
import "./Contact.css";

export default (props) => {
  console.log("Rendering Contact");

  return (
    <Container className="body">
      <h1>Contact Us</h1>

      <div className="flex-container">
        <div id="contact-left">
          <iframe
            title="Google Maps Location"
            src="https://maps.google.com/maps?q=2817%20Crow%20Canyon%20Rd%20%23100%2C%20San%20Ramon%2C%20CA%2094583&t=&z=13&ie=UTF8&iwloc=&output=embed"
            scrolling="no"
            className="contact-map"
          ></iframe>
        </div>
        <div id="contact-right">
          <Container>
            <h3>Office Hours</h3>
            <p>
              Mon - 9am - 6pm <br />
              Tue - 9am - 6pm <br />
              Wed - 9am - 6pm <br />
              Thurs - 9am - 6pm <br />
              Fri - 9am - 6pm <br />
              Sat - By appointment only <br />
            </p>
            <h3>Office Address</h3>
            <p>
              2817-100 Crow Canyon Rd
              <br />
              San Ramon, CA 94583
            </p>
            <h3>Phone</h3>
            <p>
              {" "}
              Tel <a href="tel:9258295711">(925) 829-5711</a> • Fax{" "}
              <a href="tel:9258293531">(925) 829-3531</a>
            </p>
          </Container>
        </div>
      </div>
    </Container>
  );
};
