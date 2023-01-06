
import { ContainerForm, RowLabel, RowInput, Button } from "../../css/listStyles"
import { useState } from "react";
import { loginUser } from "../../utils"
const Login = ({setter,setJWT,action}) => {

    const submitHandler = async (e) => {
        e.preventDefault();
        await loginUser(obj, setter,setJWT)
     }

    const [obj, setObj] = useState({});

    if (action==="logout") {
       
    }
    return (
        <>
            <h2>Login</h2>
            <ContainerForm onSubmit={submitHandler}>
                <RowLabel>UserName</RowLabel>
                <RowInput
                    onChange={(event) => {
                        setObj(obj => (
                            {
                                ...obj,
                                "authUser": event.target.value
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
                 <Button type="submit" >Login</Button>
                 <input type="submit" hidden />
            </ContainerForm>
        </>
    )
}

export default Login;