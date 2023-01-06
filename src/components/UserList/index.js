import React from "react";
import { Container, Row, Icon, Column } from "../../css/listStyles"
import { useState, useReducer } from "react";
import bin from "../../images/bin.png"
import edit from "../../images/edit.png"
import { deleteUser } from "../../utils";
import { useNavigate } from "react-router-dom";


const UserList = ({ pupils, setPupils, type }) => {

    const [listPupils, ] = useState(pupils)
    const [, renderList] = useReducer(x => x + 1, 0);

    const navigate = useNavigate(); 


    const deletePupil = async (username, userclass, email) => {
        let obj = {
            username: username,
            email: email,
            class: userclass
        }
        await deleteUser(obj)

        let tempPupils = listPupils;
        for (var i = tempPupils.users.length - 1; i >= 0; --i) {
            if (tempPupils.users[i].username === username
                &&
                tempPupils.users[i].email === email
                &&
                tempPupils.users[i].class === userclass
            ) {
                tempPupils.users.splice(i, 1);
            }
        }
        setPupils(tempPupils)
        renderList();

    }

    const editPupil= async (pupil) => {    
        navigate("/editPupil", {
            state:{ type: "pupil", user:pupil}
          });
    }

    const editTeacher= async (teacher) => {    
        navigate("/editTeacher", {
           state:{ type: "teacher", user:teacher}
          });
    }
    if (type === "pupil") {
        return (
            <Container>
                <h1>Pupils</h1>
                <Row><Column><b>Name</b></Column>
                <Column><b>Class</b></Column>
                <Column><b>Email</b></Column>
                <Column></Column>
                <Column></Column>
                </Row>
                {(pupils.users).map((pupil, index) => {

                    if (pupil.role === 0) {
                        return (
                            <Row key={index}>
                                <Column>{pupil.username}</Column>
                                <Column>{pupil.class}</Column>
                                <Column>{pupil.email}</Column>
                                <Column><Icon  onClick={() => editPupil(pupil)} src={edit} alt="edit" /> </Column>
                                <Column><Icon onClick={() => deletePupil(pupil.username, pupil.class, pupil.email)} src={bin} alt="delete" /></Column>
                            </Row>
                        )

                    }
                    return 0;
                })} </Container>)
    }

    else if (type === "teacher") {
        return (
            <Container>
                <h1>Teachers</h1>
                <Row><Column><b>Name</b></Column>
                <Column><b>Email</b></Column>
                <Column></Column>
                <Column></Column>
                </Row>
                {(pupils.users).map((pupil, index) => {

                    if (pupil.role === 1) {
                        return (
                            <Row key={index}>
                                <Column>{pupil.username}</Column>
                                
                                <Column>{pupil.email}</Column>
                                <Column><Icon onClick={() => editTeacher(pupil)}src={edit} alt="edit" /> </Column>
                                <Column><Icon onClick={() => deletePupil(pupil.username, pupil.class, pupil.email)} src={bin} alt="delete" /></Column>
                            </Row>
                        )

                    }
return 0;
                })}
            </Container>
        )
    }
};

export default UserList;