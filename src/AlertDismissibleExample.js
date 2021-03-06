import React, { useState } from "react";

import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";

var AlertDismissibleExample = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <div>
        <div><h1>Alter 숨김창</h1></div>
          <br/>
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      </div>
    );
  }
  return (
    <div>
        <div><h1>Alter 숨김창</h1></div>
        <Button onClick={() => setShow(true)}>Show Alert</Button>
    </div>

  )
};

export default AlertDismissibleExample;
