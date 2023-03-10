import { writeCookie } from "../common"

export const getPupils = async (findObj,jwtToken) => {
    try {
        console.log("getpupils",findObj,jwtToken)
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/api/findUser`, {
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
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/api/findSubjectClass`, {
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
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/api/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj)
        });
        return await response.json();
    } catch (error) {
        console.log(error)
    }
}


export const updateUser = async (obj) => {
    try {
        console.log("update called",obj)
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/api/updateUser`, {
            method: "PATCH",
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
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/api/deleteUser`, {
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
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/api/authCheck`, {
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
        const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/api/login`, {
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

