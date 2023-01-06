import './App.css';
import React from "react";
import { useEffect, useState } from "react";
import ClassList from "./components/ClassList"
import UserList from './components/UserList';
import { getPupils, getClasses } from "./utils"
import UserSearch from './components/UserSearch';
import ClassSearch from './components/ClassSearch';
import CreateUser from "./components/CreateUser";
import PageNotFound from "./views/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import EditUser from "./components/EditUser"
import Login from './components/Login';
import { getCookie } from './common';
import { authCheck } from './utils';

import Navbar from "./components/Navbar";

const App = () => {

  const [pupils, setPupils] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [loggedInUser, setUser] = useState();
  const [jwtcookie, setJWT] = useState();
  useEffect(() => {
    console.log("mount")
    let cookie = getCookie('jwt_token');
    if (cookie !== false) {
       loginWithToken(cookie)
       setJWT(cookie)
    }
   fetchData();
   
  }, []);


  useEffect(() => {
    console.log("jwt", loggedInUser,jwtcookie)
    const fetchData = async () => {
      let data = await getPupils({}, jwtcookie)
      setPupils(() => {
        return data;
      });
      let data2 = await getClasses({}, jwtcookie)
      setSubjects(() => {
        return data2;
      });
    };
    if (loggedInUser) {
      console.log("fetching data")
      fetchData();
    }
  }, [loggedInUser]);



  const loginWithToken = async (cookie) => {
    console.log("try login with token",cookie)
    const user = await authCheck(cookie)
    setUser(user)
  }

  if (loggedInUser && (!pupils.users || !subjects.Subject) ){
    return( <h1>loading {loggedInUser } {jwtcookie}</h1>)
  }

  return (

    <div className="App">
      <BrowserRouter>
        <Navbar id="mainNav" loggedInUser={loggedInUser}></Navbar>
        <Routes>
          <Route
            path="/"
            element={<h2>home</h2>} />

          {loggedInUser ?
            <>
              <Route
                path="/SearchPupils"
                element={
                  <>
                    <h1>Search Users</h1>
                    <UserSearch setPupils={setPupils} />
                    <UserList pupils={pupils} setPupils={setPupils} type="pupil" />
                  </>
                }
              />
              <Route
                path="/SearchTeachers"
                element={
                  <>
                    <h1>Search Users</h1>
                    <UserSearch setPupils={setPupils} />
                    <UserList pupils={pupils} setPupils={setPupils} type="teacher" />
                  </>
                }
              />
              <Route
                path="/Searchclasses"
                element={
                  <>
                    <h1>Search Classes</h1>
                    <ClassSearch setSubjects={setSubjects} />
                    <ClassList subjects={subjects} />
                  </>
                }
              />
              <Route
                path="/createUser"
                element={
                  <CreateUser />
                }
              />
              <Route
                path="/editTeacher"
                element={
                  <EditUser type="teacher" />
                }
              />
              <Route
                path="/editPupil"
                element={
                  <EditUser type="pupil" />
                }
              />

            </> : null}
          <Route
            path="/login"
            element={
              <Login setter={setUser} setJWT={setJWT} action="login" />
            }
          />
          <Route
            path="/logout"
            element={
              <Login setter={setUser} setJWT={setJWT} action="logout" />
            }
          />
          <Route
            path="*"
            element={<PageNotFound
            />}
          />
        </Routes>

      </BrowserRouter>

    </div >



  );
}

export default App;
