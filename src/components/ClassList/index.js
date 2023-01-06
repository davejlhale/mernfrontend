import React from "react";
import { Container, Row ,Column} from "../../css/listStyles"


const ClassList = ({ subjects }) => {
    return (
        <Container>
            <h1>Subjects</h1>
            {(subjects.Subject).map((subject, index) => {
                return (
                <Row key={index}>
                    <Column>{subject.subjectname}</Column>
                    <Column>{subject.class}</Column>
                </Row>
                )
            })}
        </Container>
    )
};



export default ClassList;