import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [curAnswer, setCurAnswer] = useState<string>(options[0]);
    const [correct, setCorrect] = useState<boolean>(false);
    const addNewAnswer = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newAnswer = event.target.value;
        setCurAnswer(newAnswer);
        setCorrect(newAnswer === expectedAnswer);
    };
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={curAnswer} onChange={addNewAnswer}>
                {options.map((option, i) => (
                    <option key={i} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {correct ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
