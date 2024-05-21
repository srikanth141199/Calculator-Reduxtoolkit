import { configureStore } from "@reduxjs/toolkit";
import { calculateReducer } from "./Reducers/calculatorReducer";

export const store = configureStore({
    reducer : {
        calculateReducer
    }
})