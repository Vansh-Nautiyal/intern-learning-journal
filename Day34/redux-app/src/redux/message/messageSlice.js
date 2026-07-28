import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    content : "Hello User",
};
export const messageSlice = createSlice({
    name : 'message',
    initialState,
    reducers : {
        greeting : (state)=> {
            state.content = "Good morning";
        },
        greetingByName : (state,action) =>{
            state.content = `Good morning ${action.payload}`;
        },
        reset : (state) =>{
            state.content = "Hello User";
        },
    },
});

export const {greeting, greetingByName, reset} = messageSlice.actions;
export default messageSlice.reducer;