import React from "react";

import "./Services.css";
import { Container } from "react-bootstrap";

export default (props) => {
  console.log("Rendering Root Canals");

  return (
    <Container className="body">
      <h1>Trauma</h1>
      <h3>Dislodged Teeth</h3>
      <p>
        Injuries to the mouth can cause teeth to be pushed back into their
        sockets. Your endodontist or general dentist may reposition and
        stabilize your tooth. Root canal treatment is usually started within a
        few weeks of the injury and a medication, such as calcium hydroxide, may
        be placed inside of the tooth. Eventually, a permanent root canal
        filling will be placed.
      </p>
      <p>
        Sometimes a tooth may be pushed partially out of the socket. Again, your
        endodontist or general dentist may reposition and stabilize your tooth.
        If the pulp remains healthy, then no other treatment is necessary. Yet,
        if the pulp becomes damaged or infected, root canal treatment will be
        required.
      </p>
      <h3>Avulsed Teeth</h3>
      <p>
        If an injury causes a tooth to be completely knocked out of your mouth,
        it is important that you are treated immediately! If this happens to
        you, keep the tooth moist. If possible, put it back into the socket. A
        tooth is more likely to be saved if it remains moist. You can even put
        the tooth in milk or a glass of water (add a pinch of salt.) Your
        Endodontist may start root canal treatment based upon the stage of root
        development. The length of time the tooth was out of your mouth and the
        way the tooth was stored, may influence the type of treatment you
        receive.
      </p>
      <h3>Injuries in Children</h3>
      <p>
        An injured immature tooth may need one of the following procedures to
        improve the chances of saving the tooth:
      </p>
      <h3>Apexogenesis</h3>
      <p>
        This procedure encourages the root to continue development by attempting
        to keep the pulp tissue vital and healthy. With apexogenesis, the pulp
        tissue is covered with medication to encourage growth. The tip of the
        root (apex) will continue to close as the child gets older. In turn, the
        walls of the root canal will thicken. If the pulp heals, no additional
        treatment will be necessary. The more mature the root becomes, the
        better the chance to save the tooth.
      </p>
      <h3>Apexification</h3>
      <p>
        In this case, Dr. Saoji will determine if an unhealthy and often
        non-vital pulp needs to be removed. The doctors may discuss the
        treatment options of either placing a medication into the root to help a
        hard tissue form near the root tip, or a material may be placed at the
        end of the root to allow for an immediate seal of the root canal system.
        Unfortunately, the root canal walls will not continue to develop, but
        the goal is to be able to maintain the tooth as long as possible without
        disease or symptoms.
      </p>
    </Container>
  );
};
