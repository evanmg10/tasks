import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [ans, setAns] = useState<string>("");
    return (
        <div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Enter Answer Below:</Form.Label>
                <Form.Control
                    value={ans}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setAns(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                {ans === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
            </div>
        </div>
    );
}
