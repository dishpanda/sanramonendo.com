import React from "react";

import "./Services.css";
import { Container } from "react-bootstrap";

export default (props) => {
  console.log("Rendering Root Canals");

  return (
    <Container className="body">
      <h1>Fracture Detection</h1>
      <p>
        Cracked teeth demonstrate many types of symptoms, including pain when
        chewing, temperature sensitivities, or even the release of biting
        pressure. It is also common for pain to come and go, making it difficult
        to diagnose the cause of discomfort.
      </p>
      <p>
        Chewing can cause movement of the cracked pieces of your tooth, and the
        pulp within the tooth becomes irritated. At the same time, when biting
        pressure is released, the crack can close quickly, resulting in sharp
        pain. Eventually, the pulp will become damaged and tooth will
        consistently hurt, even when you are not chewing. It is possible that
        cracks can lead to infection of the pulp tissue, which can spread to the
        bone and gum surrounding the problematic tooth.
      </p>
      <h2>Types of Cracks</h2>
      <h3>Craze Lines</h3>
      <p>
        These are tiny cracks that only affect the outer enamel of the tooth.
        These cracks are more common in adults. These types of cracks are
        superficial and are usually of no concern.
      </p>
      <h3>Fractured Cusp</h3>
      <p>
        When a cusp becomes weakened, a fracture may result. The cusp may break
        off or be removed by a dentist. A fractured cusp rarely damages the
        pulp, so root canal is not necessary. Your dentist will usually restore
        the tooth with a full crown.
      </p>
      <h3>Cracked Tooth</h3>
      <p>
        This type of crack extends from the chewing surface of the tooth and
        vertically migrates towards the root. In some cases, the crack may
        extend below the gum line. It is possible for the crack to extend
        further into the root. Damage to the pulp is commonplace. In this case,
        root canal treatment is usually necessary. A cracked tooth that is not
        treated will worsen, resulting in the loss of the tooth. Therefore,
        early detection is essential.
      </p>
      <h3>Split Tooth</h3>
      <p>
        A split tooth is usually the result of an untreated cracked tooth. It
        can be identified by a crack with distinct segments. This type of tooth
        can never be saved intact. Yet, the position and extent of the problem
        will dictate whether any portion of the tooth can be saved. Sometimes,
        endodontic retreatment by the doctors and restoration by your dentist
        can be used to save a portion of the tooth.
      </p>
      <h3>Vertical Root Fracture</h3>
      <p>
        A vertical root fracture begins at the root and extends towards the
        chewing surface of the tooth. Unfortunately, they show minimal symptoms
        and may go unnoticed. Treatment involves endodontic surgery if a portion
        of the tooth can be saved by removal of the fractured root. Otherwise
        the tooth will have to be extracted.
      </p>
    </Container>
  );
};
