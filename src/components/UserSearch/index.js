import React from "react";
import { Container, Row } from "../../css/listStyles"
import {  useState } from "react";
import { getPupils } from "../../utils"

const PupilSearch = ({ setPupils}) => {

 //states for pupil search
  const [username, setSearchName] = useState()
  const [email, setSearchEmail] = useState()
  const [studentClass, setSearchClass] = useState()

  const submitHandler = async (event) => {
    event.preventDefault();
    let findObj = {};
    //check used to cancel ternary assignment expected errors
    let check = !!username ? findObj.username = username : null;
    check += !!email ? findObj.email = email : null;
    check += !!studentClass ? findObj.class = studentClass : null;
    console.log(check, " : ", findObj);
    let data = await getPupils(findObj);
    setPupils(data);
    return 0;
  }


    return (
        <form onSubmit={submitHandler} >
            <input onChange={(event) => setSearchName(event.target.value)} type="text" placeholder="student name"></input>
            <input onChange={(event) => setSearchClass(event.target.value)} type="text" placeholder="student class"></input>
            <input onChange={(event) => setSearchEmail(event.target.value)} type="text" placeholder="student email"></input>
            <input type="submit" hidden />
        </form>
    )

}

export default PupilSearch;