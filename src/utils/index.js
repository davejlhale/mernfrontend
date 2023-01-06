import { writeCookie } from "../common"

export const getPupils = async (findObj,jwtToken) => {
    try {
        console.log("getpupils",findObj,jwtToken)
        const response = await fetch("http://localhost:5001/api/findUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwtToken}`
            },
            body: JSON.stringify(findObj)
        });

       



        console.log("getpupils2")
        return await response.json()

    } catch (error) {
        console.log("t",error)
    }
}

export const getClasses = async (findObj) => {
    try {
        const response = await fetch("http://localhost:5001/api/findSubjectClass", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(findObj)
        });
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export const createUser = async (obj) => {
    try {
        const response = await fetch("http://localhost:5001/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        });
        return await response.json();
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (obj) => {
    try {
        const response = await fetch("http://localhost:5001/api/deleteUser", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        });
        return await response.json();
    } catch (error) {
        console.log(error)
    }
}


export const authCheck = async (jwtToken) => {
    console.log("authCheck",jwtToken)
    try {
        const response = await fetch("http://localhost:5001/api/authCheck", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwtToken}`
            }
        })
        const data = await response.json();
        console.log("data",data);
        return data.username
    } catch (error) {
        console.log(error);
    }
}

export const loginUser = async (obj, setter,setJWT) => {
    try {
        console.log(obj)
        const response = await fetch("http://localhost:5001/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        const data = await response.json()
        console.log("tokendata",data)
        setJWT(data.token)
        setter(data.username)
        writeCookie("jwt_token", data.token, 7)
    } catch (error) {
        console.log(error)
    }
}