import {configureStore} from '@reduxjs/toolkit';
import {userInfoReducer} from '../Features/userDataSlice.js'
export const store = configureStore({
    reducer: userInfoReducer
})