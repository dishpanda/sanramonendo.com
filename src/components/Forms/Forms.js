import React from "react";

import ConsentForm from "./d/consent-for-endodontic-consultation.pdf";
import HealthHistory from "./d/patient-health-history.pdf";
import RCTConsent from "./d/rct-consent.pdf";
import "./Forms.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default (props) => {
  console.log("Rendering Forms");

  return (
    <Container className="body">
      <h1>Patient Forms</h1>
      <p>
        Please click to download and fill out the necessary forms to save time
        at the office.
      </p>
      <ul className="list-unstyled">
        <li>
          <a href={ConsentForm} rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDownload} /> Consultation Consent Form
            (pdf)
          </a>
        </li>
        <li>
          <a href={HealthHistory} rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDownload} /> Patient Health History Form
            (pdf)
          </a>
        </li>
        <li>
          <a href={RCTConsent} rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDownload} /> RCT Consent Form (pdf)
          </a>
        </li>
      </ul>
    </Container>
  );
};
