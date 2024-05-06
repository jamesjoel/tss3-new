import { createSlice } from '@reduxjs/toolkit'

let AdminAuthSlice = createSlice({
    name : "adminauth",
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

export default AdminAuthSlice.reducer;

export let {doLogin, doLogout} = AdminAuthSlice.actions;