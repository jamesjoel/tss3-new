import { createSlice } from '@reduxjs/toolkit'

let AuthSlice = createSlice({
    name : "auth",
    initialState : false,
    reducers : {
        doLogin(state, action){
            return true;
        },
        doLogout(state, action){
            return false;
        }
    }
})

export default AuthSlice.reducer;

export let { doLogin, doLogout  } = AuthSlice.actions;