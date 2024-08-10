import React, { useRef, useState } from 'react'
import { json, NavLink, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getUserInfo,getUserContestInfo } from '../../Features/userDataSlice.js';
import { useEffect } from 'react';


function User_Landing_page() {
  
  const [mainInfo,setMainInfo] =useState({
    "handle": "not provied",
    "maxRank": "not provied",
    "maxRating": 0,
    "rank": "not provied",
    "rating": 0,
    "avatar": "not provied",
    "totalContests":0,
    "maxRatingContest":0,
    "lastName":	"",
    "firstName":	"not provied"



  })
    let a=0;
    const {userId} = useParams();
    const dispatch = useDispatch();
    const navigate=useNavigate();
   useEffect(()=>{

    console.log(userId);
    fetch(`https://codeforces.com/api/user.info?handles=${userId}`).then((res)=>res.json()).then((res)=>{
      if (res.status==="FAILED") {
        navigate('/Login/user404')
        a=1;
      }
      else return res.result;
     }).then((res)=>res[0]).then((res)=> dispatch(getUserInfo(res))).catch(()=> {
      if (a==0) {
        a=2;
        navigate('/Login/apiError')
      }
     });
  
  
  
//------------------------------------------------------------------------------------------------------------------------------------------
 
    if (a==0) {
     fetch(`https://codeforces.com/api/user.rating?handle=${userId}`).then((res)=>res.json()).then((res)=>{
    return res.result;
      }).then((res)=> dispatch(getUserContestInfo(res))).catch((err)=>console.log(err));
    };
  },[userId])
  
  
  
  
  let userData =(useSelector((state)=>state.userInfo.genInfo[0]));
  let userContestData = useSelector((state)=>state.userInfo.contestInfo[0]);
  
  console.log(userData);
  console.log(userContestData);
  
const rankCol =useRef();    
  useEffect(()=>{
if (userData && userContestData) {
   let maxRatingTemp=userData.maxRating;
   console.log(maxRatingTemp);
   let maxRatingContestTemp=0;
      for (let index = 0; index < userContestData.length; index++) {
       const ele = userContestData[index];
       maxRatingContestTemp++;
       if (maxRatingTemp===ele.newRating) {
         break;
       }
       
      }
          console.log(maxRatingContestTemp);
      setMainInfo((pre)=>({
        ...pre,
                "handle":(userData.handle?userData.handle:mainInfo.handle),
                "maxRank":(userData.maxRank?userData.maxRank:mainInfo.maxRank),
                "maxRating":(userData.maxRating?userData.maxRating:mainInfo.maxRating),
                "rank":(userData.rank?userData.rank:mainInfo.rank),
                "rating":(userData.rating?userData.rating:mainInfo.rating),
                "avatar":(userData.avatar?userData.avatar:mainInfo.avatar),
                "totalContests":userContestData.length,
                "maxRatingContest":maxRatingContestTemp,
                "lastName":(userData.lastName?userData.lastName:mainInfo.lastName),
                "firstName":(userData.firstName?userData.firstName:mainInfo.firstName),

                

      }))
      
      
    }
  },[userData,userContestData])
  if (mainInfo.rank==="newbie") {
      rankCol.current.style.color = "grey";
  }
  if (mainInfo.rank==="pupil") {
    rankCol.current.style.color = "green";
  }
  if (mainInfo.rank==="specialist") {
    rankCol.current.style.color = "pink";
}
if (mainInfo.rank==="expert") {
  rankCol.current.style.color = "blue";
}
if (mainInfo.rank==="candidate master") {
  rankCol.current.style.color = "purple";
}
if (mainInfo.rank==="master") {
  rankCol.current.style.color = "yellow";
}
   
    

    
    return (
     <>
     <ul className="absolute left-[20%] top-[20%]">
      <li className='inline pl-20 pr-20 hover:text-emerald-400'><NavLink>Problem set</NavLink></li>
      <li className='inline pl-20 pr-20 hover:text-emerald-400'><NavLink>Performance</NavLink></li>
      <li className='inline pl-20 pr-20 hover:text-emerald-400'><NavLink>Chat</NavLink></li>
      <li className='inline pl-20 pr-20 hover:text-emerald-400'><NavLink>Resources</NavLink></li>
     </ul>
     <div className="h-[60%] w-[60%] border-4 border-red-500 absolute top-[31%] left-[21%]">
        <p className='relative left-20 top-10 text' ref={rankCol}>{mainInfo.rank.toUpperCase()}</p>
     <p className='relative p-5 top-10'>Handle- {mainInfo.handle}</p>
     <p className='relative p-5 top-10'>Name- {mainInfo.firstName} {mainInfo.lastName}</p>
     <p className='relative p-5 top-10'>Max Rating- {mainInfo.maxRating} (after {mainInfo.maxRatingContest} contests)</p>
     <p className='relative p-5 top-10'>Current Rating- {mainInfo.rating} (after {mainInfo.totalContests} contests)</p>
     <img className='absolute p-5 h-80 top-6 left-96' src={mainInfo.avatar} />
     </div>

     </>
  )
}

export default User_Landing_page