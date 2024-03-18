import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [mode, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    return (
        <div>
            <h3>Edit Mode</h3>
            {mode ? (
                <form>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setName(event.target.value)}
                    />
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={() => setIsStudent(!isStudent)}
                        />
                        Student
                    </label>
                </form>
            ) : (
                <p>
                    {name} is {isStudent ? "a student" : "not a student"}
                </p>
            )}
            <label className="form-switch">
                Edit Mode:
                <input
                    type="checkbox"
                    checked={mode}
                    onChange={() => setMode(!mode)}
                />
            </label>
        </div>
    );
}
