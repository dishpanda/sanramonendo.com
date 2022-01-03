import React from "react";
import { Container } from "react-bootstrap";
import "./Home.css";

export default (props) => {
  console.log("Rendering Homepage");

  return (
    <div>
      <div className="body">
        <Container>
          <h1>Welcome to our office!</h1>
          <p>
            At San Ramon Endodontics, we take great pride in helping you maintain
            optimal dental health.
          </p>
          <p>
            We partner with your dentist to provide you with the highest quality
            endodontic care available in our compassionate and professional
            environment.
          </p>
          <p>
            Your comfort always comes first and your concerns will always be
            addressed.
          </p>
        </Container>
      </div>
    </div>
  );
};
