import React from "react";

import { Container } from "react-bootstrap";

export default (props) => {
  console.log("Rendering Restorations");

  return (
    <Container className="body">
      <h1>Endodontic Retreatment</h1>
      <p>
        With the appropriate care, your teeth that have had endodontic treatment
        will last as long as other natural teeth. Yet, a tooth that has received
        treatment may fail to heal or pain may continue to exist. Sometimes,
        discomfort or swelling may occur months or years after treatment. If so,
        endodontic retreatment may be needed.
      </p>
      <h3>Improper healing may be caused by:</h3>
      <ul>
        <li>
          Curved or narrow canals were not treated during the initial treatment.
        </li>
        <li>
          Complicated canals went undetected during the initial treatment.
        </li>
        <li>
          The crown or restoration was not placed within the appropriate amount
          of time following the procedure.
        </li>
        <li>
          The crown or restoration did not prevent saliva from contaminating the
          inside of the tooth.
        </li>
      </ul>
      <h3>
        In some cases, new problems can influence a tooth that was successfully
        treated:
      </h3>
      <ul>
        <li>
          New decay can expose a root canal filling material, causing infection.
        </li>
        <li>
          A cracked or loose filling or crown can expose the tooth to new
          infection.
        </li>
      </ul>
      <p>
        Once retreatment has been selected as a solution to your problem, the
        doctors will regain access to the root canal filling material. The
        restorative material will be removed to enable access to the root canal
        system. The doctors will then clean your canals and carefully examine
        the inside of the problematic tooth. Once cleaned, the doctors will fill
        and seal the canals.
      </p>
      <p>
        <strong>
          At this point, Dr. Saoji will discuss what additional restorative care
          may be necessary for the treated tooth.
        </strong>
      </p>
    </Container>
  );
};
