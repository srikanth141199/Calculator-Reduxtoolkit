import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    statement : "", //this can be used to display the statement 
    result: null, // this can be used to keep track of value
    operator : null,
    currentValue : "0",
    previousValue : null

};

const performCalculation = (state) => {
  const prev = parseFloat(state.previousValue);
  const curr = parseFloat(state.currentValue);
  if (state.operator && prev !== null && curr !== null) {
    switch (state.operator) {
      case "+":
        state.result = prev + curr;
        break;

      case "-":
        state.result = prev - curr;
        break;

      case "*":
        state.result = prev * curr;
        break;

      case "/":
        state.result = prev / curr;
        break;

      case "%":
        state.result = prev % curr;
        break;

      default:
        return;
    }
  }
};


const calculatorSlice = createSlice({
  name: "calculator",
  initialState: initialState,
  reducers: {
    digitInput: (state, action) => {
        //console.log("Digit clicked : ", action.payload);
      //this will be used when entering the number
      //state.previousValue = state.currentValue; // this will keep track of previous value
      state.currentValue =
        state.currentValue === "0"
          ? action.payload
          : state.currentValue + action.payload; // this to update current value
      state.statement = state.statement + action.payload; // this will update the statement
    },

    operatorInput: (state, action) => {
        console.log("state operator : ", state.operator);
        console.log("action Operator : ", action.payload);
      if (state.operator) {
        performCalculation(state)
        state.previousValue = state.result || state.currentValue;
        state.currentValue = "0";
        state.statement = state.statement + action.payload;
        state.operator = action.payload;
      }
      else{
        state.previousValue = state.currentValue;
        state.currentValue = "0";
        state.statement = state.statement + action.payload;
        state.operator = action.payload;
      }
      
    },

    clearInput: (state, action) => {
      Object.assign(state, initialState);
    },

    decimalInput: (state, action) => {
      if (state.currentValue.charAt(state.currentValue.length - 1) !== ".") {
        // this will not allow insertion of 2 decimals at a time
        state.statement = state.statement + action.payload;
        state.currentValue += ".";
      }
    },

    calculateInput: (state, action) => {
      performCalculation(state);
      state.statement = state.result;
      state.result = null;
    },
  },
});

export const calculateReducer = calculatorSlice.reducer;
export const {digitInput, operatorInput, clearInput, decimalInput, calculateInput} = calculatorSlice.actions;
export const calculateSelector = (state) => state.calculateReducer;