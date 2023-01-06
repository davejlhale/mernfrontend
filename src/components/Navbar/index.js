import React from 'react'
import { Nav, NavLink } from './NavbarElements';


const Navbar = ({ loggedInUser,setter }) => {
  return (
      <Nav>
        <NavLink to='/'>
          <h1>Admin</h1>
        </NavLink>
        {loggedInUser ? <>
          <NavLink to='/SearchPupils' >Pupils</NavLink>
          <NavLink to='/SearchTeachers' >Teachers</NavLink>
          <NavLink to='/Searchclasses' >Classes</NavLink>

          <NavLink to='/createUser' >Add User</NavLink>
          <NavLink to='/logout' >Logout</NavLink></>:<NavLink to='/Login' >Login</NavLink>}
          
       
      </Nav>
  );
};

export default Navbar;