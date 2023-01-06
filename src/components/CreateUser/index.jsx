import React from "react";

import { ContainerForm, RowLabel, RowInput ,Button} from "../../css/listStyles"
import { useState } from "react";
import { createUser } from "../../utils"

const CreateUser = ({setReloadData}) => {
    const [obj, setObj] = useState({});
    const [res, setRes] = useState();
    const submitHandler = async (e) => {
        e.preventDefault();
        setRes(await createUser(obj));
        setReloadData("true")
    }

    return (
        <>
            <div className="error"> {res?.error}</div>
            {res?.user?.username ? <div className="success"> {res?.user?.username} Created </div> : null}
            <ContainerForm onSubmit={submitHandler}>
                <RowLabel>Pupil Name</RowLabel>
                <RowInput
                    onChange={(event) => {
                        setObj(obj => (
                            {
                                ...obj,
                                "username": event.target.value
                            }
                        ))
                    }} type="text" required />

                <RowLabel>password</RowLabel>
                <RowInput onChange={(event) => {
                    setObj(obj => (
                        {
                            ...obj,
                            "password": event.target.value
                        }
                    ))
                }} type="password" required />

                <RowLabel>Email</RowLabel>
                <RowInput onChange={(event) => {
                    setObj(obj => (
                        {
                            ...obj,
                            "email": event.target.value
                        }
                    ))
                }} type="text" required />

                <RowLabel>School role</RowLabel>
                <RowInput onChange={
                    (event) => {
                        setObj(obj => (
                            {
                                ...obj,
                                "role": event.target.value
                            }
                        ))
                    }
                } type="text" />

                <RowLabel>Pupil Class</RowLabel>
                <RowInput onChange={
                    (event) => {
                        setObj(obj => (
                            {
                                ...obj,
                                "class": event.target.value
                            }
                        ))
                    }
                } type="text" />

                <RowLabel>Enrolled Subjects</RowLabel>
                <RowInput onChange={
                    (event) => {
                        setObj(obj => (
                            {
                                ...obj,
                                "subjects": event.target.value
                            }
                        ))
                    }
                } type="text" />

               <Button type="submit" >Create</Button>
            </ContainerForm>
        </>
    )
}

export default CreateUser;