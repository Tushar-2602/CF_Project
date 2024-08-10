import React from 'react'
import {Link,NavLink} from 'react-router-dom'

function Header() {
  return (
    <div>
    <div className='relative top-5'>
    <NavLink to={"/aboutUs"} className="hover:underline inline relative left-10">About Us</NavLink>
    <NavLink to={"/Login"} className="hover:underline inline absolute left-[41%] right-[41%] text-center size-[20%]">WELCOME TO KRITCHERS.COM</NavLink>
    <NavLink to={"/contactUs"} className="hover:underline relative top-0 right-10 float-right">Contact Us</NavLink>
    </div>
    
   
   


    </div>
  )
}

export default Header