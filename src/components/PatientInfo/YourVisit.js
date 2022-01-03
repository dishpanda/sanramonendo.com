import React from "react";

import { Container } from "react-bootstrap";

export default (props) => {
  console.log("Rendering Financial Policy");

  return (
    <Container className="body">
      <h1>Your Visit</h1>
      <p>
        It is our goal to make your visit to our office as comfortable as
        possible. We always begin each appointment with a thorough consultation
        explaining all of the clinical and radiographic findings, your
        diagnosis, and all available treatment options. We often set time aside
        to provide same day endodontic treatment (if it is confirmed to be
        indicated and necessary). However, a complex medical history or
        treatment plan may require an evaluation and a second appointment to
        provide treatment on another day. If you prefer to proceed with a
        consultation only, please inform us of such and we will be more than
        happy to accommodate your request.
      </p>
      <h3>
        Please assist us by providing the following information at the time of
        your consultation:
      </h3>
      <ul>
        <li>Your Referral Slip</li>
        <li>A List of Medications You Are Currently Taking</li>
        <li>
          If you have dental insurance, please bring the necessary completed
          forms. This will allow us to help you process any claims.
        </li>
      </ul>
      <p>
        <b>IMPORTANT:</b> A parent or guardian must accompany all patients under
        the age of 18 at the consultation website.
      </p>

      <p>
        Please alert the office if you have a medical condition that may be of
        concern prior to treatment (i.e. diabetes, high blood pressure,
        artificial heart valves and joints, rheumatic fever, etc.), if you are
        on any specific medications that may affect bleeding (i.e. heart
        medications, aspirin, anticoagulant therapy, etc.), or if you require
        medication prior to dental cleanings or dental treatment (i.e
        antibiotics). We also recommend that your inform us of any need for oral
        sedatives or nitrous oxide <i>prior to your appointment date.</i>
      </p>

      <h3>X-Rays/Imaging</h3>
      <p>
        You may request that your restorative dentist forward any relevant
        x-rays to our office, but this is not typically necessary. It is our
        standard of care to take any necessary radiographs at our office to aid
        in diagnosis and treatment. When indicated, we may recommend additional
        cone-beam CT imaging.
      </p>
    </Container>
  );
};
