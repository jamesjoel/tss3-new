import { createSlice } from '@reduxjs/toolkit'

let UserAuthSlice = createSlice({
    name : "userauth",
    initialState : false,
    reducers : {
        doLogin(){
            return true;
        },
        doLogout(){
            return false;
        }
    }
})

export default UserAuthSlice.reducer;
export let { doLogin, doLogout } = UserAuthSlice.actions;