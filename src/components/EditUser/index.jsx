import React from "react";
import { useLocation } from "react-router-dom";
import { ContainerForm, RowLabel, RowInput, Button } from "../../css/listStyles"

import { updateUser } from "../../utils"

const EditUser = ({ type, user }) => {
    const location = useLocation();
let unedited = null;
    let obj = {};
    if (location?.state?.user) {
         unedited = {

            "username": location.state.user.username,
            "email": location.state.user.email,
            "password": location.state.user.password,
            "class": location.state.user.class,
            "role": location.state.user.role,
            "subjects": location.state.user.subjects,

        }
        delete unedited._id;
        Object.keys(unedited).map((key) => {
            return obj[key] = location.state.user[key]
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        let updateObj = { "find": unedited, "changeValuesTo": obj }
        console.log(updateObj)
        await updateUser(updateObj);
        // setReloadData("true")

    }


    if (unedited===null) { return <h3>no user selected to edit</h3> }
    else
        return (
            <ContainerForm onSubmit={submitHandler}>
                <RowLabel>Pupil Name</RowLabel>
                <RowInput
                    onChange={
                        (event) => {
                            obj.username = event.target.value
                        }
                    }
                    type="text" required defaultValue={obj.username} />

                <RowLabel>password</RowLabel>
                <RowInput onChange={
                    (event) => {
                        obj.password = event.target.value
                    }
                } type="password" required defaultValue={obj.password} />

                <RowLabel>Email</RowLabel>
                <RowInput onChange={(event) => {

                    obj.email = event.target.value
                }} type="text" required defaultValue={obj.email} />

                <RowLabel>School role</RowLabel>
                <RowInput onChange={

                    (event) => {
                        obj.role = event.target.value
                    }
                } type="text" defaultValue={obj.role} />

                <RowLabel>Pupil Class</RowLabel>
                <RowInput onChange={
                    (event) => {
                        obj.class = event.target.value
                    }
                } type="text" defaultValue={obj.class} />

                <RowLabel>Enrolled Subjects</RowLabel>
                <RowInput onChange={
                    (event) => {
                        obj.subjects = event.target.value
                    }
                } type="text" defaultValue={obj.subjects} />

                <Button type="submit" >Update</Button>
            </ContainerForm>)

}

export default EditUser;