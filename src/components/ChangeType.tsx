import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qType, setType] = useState<QuestionType>("short_answer_question");
    const [qString, setString] = useState<string>("Short Answer");
    function changeQuestionType(): void {
        if (qType === "multiple_choice_question") {
            setType("short_answer_question");
            setString("Short Answer");
        } else {
            setType("multiple_choice_question");
            setString("Multiple Choice");
        }
    }
    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            {qString}
        </div>
    );
}
