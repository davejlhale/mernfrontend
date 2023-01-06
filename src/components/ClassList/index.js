import React from "react";
import { Container, Row } from "../../css/listStyles"


const ClassList = ({ subjects }) => {
    return (
        <Container>
            <h1>Subjects</h1>
            {(subjects.Subject).map((subject, index) => {
                return (
                <Row key={index}>
                    <p>{subject.subjectname}</p>
                    <p>{subject.class}</p>
                </Row>
                )
            })}
        </Container>
    )
};



export default ClassList;