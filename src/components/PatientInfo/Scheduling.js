import React from "react";

import { Container } from "react-bootstrap";

export default (props) => {
  console.log("Rendering Financial Policy");

  return (
    <Container className="body">
      <h1>Scheduling</h1>
      <p>
        We will schedule your appointment as promptly as possible. If you have
        pain or an emergency situation, every attempt will be made to see you
        that day. We value your time and will always do our best to accommodate
        your schedule.
      </p>
      <p>
        We try our best to stay on schedule to minimize your waiting time. As
        Dr. Saoji provides many types of endodontic services, various
        circumstances may lengthen the time allocated for a procedure. Emergency
        cases may also arise and cause slight delays. We appreciate your
        understanding and patience.
      </p>
      <h3>
        Please call us at <a href="tel:9258295711">(925) 829-5711</a> with any
        questions or to schedule an appointment.
      </h3>
    </Container>
  );
};
