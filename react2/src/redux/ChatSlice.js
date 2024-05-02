import { createSlice } from '@reduxjs/toolkit';

let ChatSlice = createSlice({
    name : "chat",
    initialState : [],
    reducers : {
        // write down our actions here
        sendMsg(state, action){
            state.push(action.payload);
            
        }
    }
})

export default ChatSlice.reducer;

export let { sendMsg } = ChatSlice.actions;