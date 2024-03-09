import React from "react";
import "./App.css";
import myQuokka from "./Assets/Quokka.jpg";
import { Button, Container, Row, Col } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1 style={{ backgroundColor: "green" }}>This is my header</h1>
            <header className="App-header">
                CISC275 - Task 3 - HTML and CSS header - Evan Gantert
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload - Hello World
            </p>
            <ol>
                <li>Header</li>
                <li>Image with alt text</li>
                <li>List w/ 3 elements</li>
                <li>Header Background Color</li>
                <li>Bootstrap button</li>
            </ol>
            <img src={myQuokka} alt="Image of quokka" />
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First Column
                        <div
                            style={{
                                width: "100%",
                                height: "400%",
                                border: "3px solid black",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Second Column
                        <div
                            style={{
                                width: "100%",
                                height: "400%",
                                border: "3px solid black",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br> <br></br> <br></br> <br></br>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}
export default App;
