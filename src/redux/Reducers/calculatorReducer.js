import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    statement : "0", //this can be used to display the statement 
    value : 0 // this can be used to keep track of value
};


const calSlice = createSlice({
    name : "calculator",
    initialState : initialState,
    reducers : {

    }
})