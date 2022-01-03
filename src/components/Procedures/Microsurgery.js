import React from "react";

import "./Services.css";
import { Container } from "react-bootstrap";

export default (props) => {
  console.log("Rendering Root Canals");

  return (
    <Container className="body">
      <h1>Microsurgery (Apicoectomy)</h1>
      <h3>Why might I need Endodontic Surgery?</h3>
      <p>
        Generally, a root canal is all that is needed to save teeth with injured
        pulps from extraction. Occasionally, this non-surgical procedure will
        not be sufficient to heal the tooth and your endodontist will recommend
        surgery. Endodontic surgery can be used to locate fractures or hidden
        canals that do not appear on x-rays but still manifest pain in the
        tooth. Damaged root surfaces or the surrounding bone may also be treated
        with this procedure. The most common surgery used to save damaged teeth
        is an apicoectomy or root-end resection.
      </p>
      <h3>What is an Apicoectomy?</h3>
      <p>
        The video below illustrates this simple procedure. An incision is made
        in the gum tissue to expose the bone and surrounding inflamed tissue.
        The damaged tissue is removed along with the end of the root tip. A
        root-end filling is placed to prevent reinfection of the root and the
        gum is sutured. The bone naturally heals around the root over a period
        of months restoring full function.
      </p>
      <p>
        Following the procedure, there may be some discomfort or slight swelling
        while the incision heals. This is normal for any surgical procedure. To
        alleviate any discomfort, an appropriate pain medication will be
        recommended. If you have pain that does not respond to medication,
        please call our office.
      </p>
    </Container>
  );
};
