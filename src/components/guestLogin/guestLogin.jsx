import React, { useEffect, useState } from 'react'

function GuestLogin() {
    const [vals,setVals]=useState({
        "name":"tushar",
        "age":19,
        "address":"addr"
    })
    let obj={
        
    }
    useEffect(()=>{
        if (true) {
            setVals((pre)=>({
                ...pre,
                "name":(obj.name?obj.name:vals.name)
                
        }))
        }
},[])

  return (
   <>
   <p>{vals.name}</p>
   </>
  )
}

export default GuestLogin