import React from "react";

import "./About.css";
import { Container } from "react-bootstrap";

import drSaoji from "../../images/dr-saoji.jpg";

export default (props) => {
  console.log("Rendering About");

  return (
    <Container className="body">
      <h1>About</h1>
      <div className="flex-container-alt">
        <div className="bio">
          <h3>Dr. Nachiket Saoji</h3>
          <p>
            Dr. Saoji earned his Masters degree in Biomaterials at University of
            Alabama, Birmingham (2009) before continuing his studies at
            University of California San Francisco where he received his Doctor
            of Dental Surgery (2011). He practiced as general dentist for a
            couple of years and decided to become a root canal specialist. He
            was accepted in the Endodontics speciality training program at the
            University of Pennsylvania, Philadelphia. During his speciality
            training Dr. Saoji received the of 2015 Grossman Award for
            outstanding proficiency in the Endodontic graduate program. He has
            been practicing Endodontics for several years and is well versed in
            micro endodontics including root canals and surgeries.
          </p>
        </div>
        <div className="headshot">
          <img src={drSaoji} alt="Dr. Saoji." />
          <p className="">
            <em>Dr. Saoji</em>
          </p>
        </div>
      </div>
    </Container>
  );
};
