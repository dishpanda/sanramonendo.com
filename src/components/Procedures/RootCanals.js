import React from "react";

import "./Services.css";
import { Container } from "react-bootstrap";

export default (props) => {
  console.log("Rendering Root Canals");

  return (
    <Container className="body">
      <h1>Root Canals</h1>
      <h3>What is a root canal procedure?</h3>
      <p>
        Root canal therapy is one of the most common dental procedures
        performed, well over 14 million every year. When indicated, this
        treatment can help to save your natural teeth and prevent the need of
        dental implants or bridges.
      </p>
      <p>
        At the center of your tooth is pulp. Pulp is a collection of blood
        vessels that helps to build the surrounding tooth. Irritation of the
        pulp can be caused by trauma to the tooth, deep decay, cracks and chips,
        or repeated dental procedures. Associated symptoms may be cold or heat
        sensitivity, pain to biting or tapping, spontaneous pain, or swelling of
        the face or adjacent gum tissue.
      </p>
      <p>
        If you experience any of these symptoms, your dentist will most likely
        recommend non-surgical root canal treatment to eliminate the diseased
        pulp. This injured pulp is removed and the root canal system is
        thoroughly cleaned and sealed. This therapy usually involves local
        anesthesia and may be completed in one or more visits depending on the
        treatment required. Success for this type of treatment occurs in well
        over 90% of cases. If your tooth is not amenable to endodontic treatment
        or the likelihood of success is unfavorable, you will be informed at the
        time of consultation. We use local anesthesia to allow for a
        predictable, comfortable procedure. In addition, we will provide nitrous
        oxide analgesia if indicated and requested. You will be able to drive
        home after your treatment, and will be comfortable returning to your
        normal routine.
      </p>
      <h3>What happens after treatment?</h3>
      <p>
        When your root canal therapy has been completed, a record of your
        treatment will be sent to your restorative dentist. If it is necessary,
        Dr. Saoji will discuss whether you may need to contact the office of
        your restorative dentist for a follow-up restoration within a few weeks
        of completion at our office. Your restorative dentist will decide on
        what type of restoration is necessary to protect your tooth. It is rare
        for endodontic patients to experience complications after routine
        endodontic treatment or microsurgery. If discomfort or questions occur
        we can be contacted during and after office hours. To prevent further
        decay, continue to practice good dental hygiene.
      </p>
      <h3>How much will it cost?</h3>
      <p>
        The cost associated with this procedure can vary depending on factors
        such as the complexity of treatment that is required and which tooth is
        affected. In general, endodontic treatment is much less expensive than
        tooth removal and replacement with an artificial tooth.
      </p>
    </Container>
  );
};
