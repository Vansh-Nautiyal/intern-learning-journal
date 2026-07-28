import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    content : "Hello World",
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
    },
});

export const {greeting, greetingByName} = messageSlice.actions;
export default messageSlice.reducer;