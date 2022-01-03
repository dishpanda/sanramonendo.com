import React from "react";

import { Container } from "react-bootstrap";

export default (props) => {
  console.log("Rendering Financial Policy");

  return (
    <Container className="body">
      <h1>Financial Policy</h1>
      <h3>Patient Billing</h3>
      <p>
        We deliver the finest care at the most reasonable cost to our patients.
        It is our policy that payment is due at the time service is rendered,
        unless other arrangements have been made in advance. For your
        convenience we accept Visa, MasterCard, American Express, personal
        checks, and cash.
      </p>
      <p>
        We give an estimate of the treatment fee prior to your visit to our
        office. If you have questions regarding your account, please contact us
        at San Ramon Office Phone Number{" "}
        <a href="tel:9258295711">(925) 829-5711</a>. Many times, a simple
        telephone call will help to clarify any questions that you may have.
      </p>
      <p>
        <b>
          Please remember that you are responsible for all fees charged,
          regardless of your insurance coverage.
        </b>
      </p>
      <p>
        We will send you a monthly statement when applicable. Most insurance
        companies will respond within four to six weeks. Please call our office
        if your statement does not reflect your insurance payment within that
        time frame. Although as a courtesy to patients we may provide an
        estimate of your financial responsibility beyond insurance payment,{" "}
        <i>this is indeed merely an estimate</i>, and your balance due may
        change based upon yearly maximums and covered services. Any remaining
        balance after your insurance has paid is your responsibility. Your
        prompt remittance is appreciated. We can make arrangements for a payment
        plan <i>prior</i> to the actual procedure.
      </p>
    </Container>
  );
};
