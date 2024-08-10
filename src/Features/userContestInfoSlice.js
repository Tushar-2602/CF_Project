import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userContestInfo: []
};

export const userContestInfoSlice = createSlice({
    name:'userContestInfo',
    initialState,
    reducers: {
        getUserContestInfo: (state,action)=>{
        state.userContestInfo.push(action.payload)
            
        }
    }
})

export const {getUserContestInfo} = userContestInfoSlice.actions
export const  userContestInfoReducer= userContestInfoSlice.reducer