import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import  css from"./navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
        <div>
            <NavLink 
            to='/'
            className={({isActive})=>(isActive ?"active-link":"link")}
            >
                Main
            </NavLink>

        </div>
        <div>
            <NavLink
            to="/Login"
            className={({isActive})=>(isActive?"active-link":"link")}
            
            
            >
                Login
            </NavLink>
        </div>
        <div>
            <NavLink
            to="/Regist"
            className={({isActive})=>(isActive?"active-link":"link")}
            
            
            >
                Register

            </NavLink>
        </div>
        <div>
            <NavLink
            to="/Dashbord"
            className={({isActive})=>(isActive?"active-link":"link")}
            
            
            >
               dashbord

            </NavLink>
        </div>
        <div>
            <NavLink
            to="/About"
            className={({isActive})=>(isActive?"active-link":"link")}
            
            
            >
                About us 

            </NavLink>
        </div>
        <></>
      
    </div>
  )
}

export default Navbar
