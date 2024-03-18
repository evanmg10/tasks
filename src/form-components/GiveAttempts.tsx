import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [numReq, setNumReq] = useState<string>("0");
    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Number of Attempts Remaining: {attempts}</span>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Requested Number of Attempts: </Form.Label>
                <Form.Control
                    type="number"
                    value={numReq}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setNumReq(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    setAttempts(attempts + parseInt(numReq) || attempts)
                }
            >
                gain
            </Button>
        </div>
    );
}
