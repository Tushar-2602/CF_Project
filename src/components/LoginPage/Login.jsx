import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

let userId


function Login(props) {
    const [text,setText] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        if (props.error==="api") {
            setText("Looks like CF wesite is not working")
        }
        if (props.error==="user") {
            setText("invalid CF ID")
        }
    },[]);
    const verify = (e)=>{

        userId = document.getElementById("input").value;
        if (userId==="") {
            document.getElementById("error").innerHTML="Please enter CF id"
        }
        else navigate(`/User/${userId}`);
        // console.log(userId);
    }


    return (
        <div>
        <div>
        <p className=" absolute w-[100%] block top-[30%] text-center text-red-600">{text}</p>
        <form className='absolute top-[37%] left-[44%]'>
            <input className=' block text-center' type='text' placeholder='Enter your CF ID' id="input"></input>
            <NavLink to={"/Guest"} className="relative top-5 left-[25%] text-center text-blue-800 hover:underline">Login as guest</NavLink>
            <p className="relative top-5 left-[3%] text-center text-yellow-800 hover:underline" id='error'></p>
            <input type="submit" value="Submit" className="absolute top-[200%] left-[34%] border-red-600 border-2 hover:bg-red-600 rounded-sm p-1 " onClick={(e)=>{
                e.preventDefault()
                verify()
            }}></input>
            
            </form>
        
            
            
      
        </div>
    </div>
  )
}

export default Login