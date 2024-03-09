import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setAttempts] = useState<number>(4);
    const [inProgress, setStatus] = useState<boolean>(false);
    function startQuiz(): void {
        setStatus(true);
        setAttempts(numAttempts - 1);
    }
    return (
        <div>
            <Button
                onClick={startQuiz}
                disabled={inProgress || numAttempts == 0}
            >
                Start Quiz
            </Button>
            <Button onClick={() => setStatus(false)} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(numAttempts + 1)}
                disabled={inProgress}
            >
                Mulligan
            </Button>
            {"Number of attempts: " + numAttempts}
        </div>
    );
}
