import React from "react";
import "./App.css";
import myQuokka from "./Assets/Quokka.jpg";
import { Button, Container, Row, Col } from "react-bootstrap";

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
        </div>
    );
}
export default App;
