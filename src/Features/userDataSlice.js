import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {
        "genInfo":[],
        "contestInfo":[]
    }
};

export const userInfoSlice = createSlice({
    name:'userInfo',
    initialState,
    reducers: {
        getUserInfo: (state,action)=>{
            state.userInfo.genInfo.length=0;    
        state.userInfo.genInfo.push(action.payload)
            
        },
        getUserContestInfo: (state,action)=>{
            state.userInfo.contestInfo.length=0;                    
            state.userInfo.contestInfo.push(action.payload)
                
            }
    }
})

export const {getUserInfo,getUserContestInfo} = userInfoSlice.actions
export const  userInfoReducer= userInfoSlice.reducer