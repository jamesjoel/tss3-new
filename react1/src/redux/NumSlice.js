import { createSlice } from '@reduxjs/toolkit';


let NumSlice = createSlice({
    name : "num",
    initialState : 0,
    reducers : {
        inc(state, action){
            state++;
            return state;
        },
        dec(state, action){
            state--;
            return state;
        },
        reset(state, action){
            return 0;
        },
        add(state, action){
            let ans = state+parseInt(action.payload);
            return ans;
        }
    }
});

export default NumSlice.reducer;
export let { inc, dec, reset, add } = NumSlice.actions; 