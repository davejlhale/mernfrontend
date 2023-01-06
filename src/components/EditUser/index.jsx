import React from "react";
import { useLocation } from "react-router-dom";
import { ContainerForm, RowLabel, RowInput ,Button} from "../../css/listStyles"
import { useState } from "react";
const EditUser = ({ type, user }) => {
    const location = useLocation();
    console.log(location.state)
    const [obj, setObj] = useState({});
    const submitHandler = async (e) => {
        e.preventDefault();
        //setRes(await createUser(obj));
        console.log(obj)
    }
return ( <ContainerForm onSubmit={submitHandler}>
    <RowLabel>Pupil Name</RowLabel>
    <RowInput
        onChange={(event) => {
            setObj(obj => (
                {
                    ...obj,
                    "username": event.target.value
                }
            ))
        }} type="text" required value={location.state.user.username}/>

    <RowLabel>password</RowLabel>
    <RowInput onChange={(event) => {
        setObj(obj => (
            {
                ...obj,
                "password": event.target.value
            }
        ))
    }} type="password" required value={location.state.user.password}/>

    <RowLabel>Email</RowLabel>
    <RowInput onChange={(event) => {
        setObj(obj => (
            {
                ...obj,
                "email": event.target.value
            }
        ))
    }} type="text" required value={location.state.user.email}/>

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
    } type="text" value={location.state.user.role}/>

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
    } type="text" value={location.state.user.class}/>

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
    } type="text" value={location.state.user.subjects}/>

   <Button type="submit" >Update</Button>
</ContainerForm>)

}

 export default EditUser;