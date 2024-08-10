import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Redirect() {
  const navigate=useNavigate();
  useEffect(()=>{
    navigate('/Login')
  },[])
  return (
  <></>
  )
}

export default Redirect