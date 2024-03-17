import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colorList = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];
    const [color, setColor] = useState<string>(colorList[0]);
    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colorList.map((curColor, i) => (
                    <Form.Check
                        key={i}
                        inline
                        type="radio"
                        label={curColor}
                        id={curColor}
                        value={curColor}
                        checked={color == curColor}
                        onChange={() => setColor(curColor)}
                        //style={{ backgroundColor: curColor, color: "black" }}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: color
                }}
            >
                You have chosen {color}
            </div>
        </div>
    );
}
