import React from "react";
import { useState } from "react";
import {  getClasses } from "../../utils"



const ClassSearch = ({setSubjects}) => {

    //states for class search
    const [subjectName, setSubjectName] = useState();
    const [subjectClass, setSubjectClass] = useState();

    const submitHandler = async (event) => {
        event.preventDefault();
        let findObj = {};
        let check = !!subjectName ? findObj.subjectname = subjectName : null;
        check += !!subjectClass ? findObj.class = subjectClass : null;
        console.log(check, " : ", findObj);
        let data = await getClasses(findObj);
        setSubjects(data);
        return 0;
    }

    return (
        <form onSubmit={submitHandler} >
            <input onChange={(event) => setSubjectName(event.target.value)} type="text" placeholder="Subject name"></input>
            <input onChange={(event) => setSubjectClass(event.target.value)} type="text" placeholder="Class"></input>
            <input type="submit" hidden />
        </form>
    )

}

export default ClassSearch;