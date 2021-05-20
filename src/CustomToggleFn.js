import React from "react";

import {Accordion} from "react-bootstrap";
import {Card} from "react-bootstrap";
import "./CutomToggle"
import CutomToggle from "./CutomToggle";

var CustomToggleFn = () => {

    return (
        <div>
            <div><h1>커스텀 토글키</h1></div>
            <div>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <CutomToggle eventKey="0">Click me!</CutomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <CutomToggle eventKey="1">Click me!</CutomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

            </div>
        </div>

    )

}

export default CustomToggleFn;