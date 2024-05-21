import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    statement : "", //this can be used to display the statement 
    result: null, // this can be used to keep track of value
    operator : null,
    currentValue : "0",
    previousValue : null

};


const calculatorSlice = createSlice({
    name : "calculator",
    initialState : initialState,
    reducers : {
        digitInput : (state, action) => { //this will be used when entering the number
            //state.previousValue = state.currentValue; // this will keep track of previous value
            state.currentValue = state.currentValue === "0"? action.payload : state.currentValue + action.payload // this to update current value
            state.statement = state.statement+action.payload // this will update the statement
        },

        operatorInput : (state, action) => {
            state.statement = state.statement+action.payload;
            if(state.operator){
                state.previousValue = state.result || state.currentValue
                state.currentValue = "0"
            }
            state.operator = action.payload;
        },

        clearInput : (state, action) => {
            Object.assign(state, initialState);
        },

        decimalInput : (state, action) => {
            if(state.currentValue.charAt(state.currentValue.length - 1) !== "."){// this will not allow insertion of 2 decimals at a time
                state.statement = state.statement + action.payload;
                state.currentValue += "."
            }
        },

        calculateInput: (state, action) => {
            switch(action.operator){
                case "+":
                    break;

                default:
                    return
            }
        }

    }
})

export const calculateReducer = calculatorSlice.reducer;
export const {} = calculatorSlice.actions;
export const calculateSelector = (state) => state.calculateReducer;