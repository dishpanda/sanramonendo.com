import React from "react";
import "./Referral.css"
import { Container } from "react-bootstrap";
import ReferralForm from "./d/patient-referral-form.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  console.log("Rendering Homepage");

  return (
    <div className="body">
      <Container>
        <h1>Refer-A-Patient</h1>
        <p>
          Doctors: Please print, fill out, and hand over to the patient
          to bring to their appointment. Click to download.
        </p>
        <a href={ReferralForm} rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDownload} /> Doctor Referral Form (pdf)
        </a>
      </Container>
    </div>
  );
};
