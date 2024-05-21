import { useDispatch } from "react-redux"
import "./Keyboard.css"
import { calculateInput, clearInput, decimalInput, digitInput, operatorInput } from "../../redux/Reducers/calculatorReducer";

export default function Keyboard() {

    const dispatch = useDispatch();

    const handleClearClick = () =>{
        dispatch(clearInput());
    }

    const handleDigitClick = (digit) => {
        dispatch(digitInput(digit));
    }

    const handleOperatorClick = (operator) => {
        dispatch(operatorInput(operator));
    }

    const handleEqualClick = () => {
        dispatch(calculateInput());
    }

    const handleDecimalClick = () => {
        dispatch(decimalInput("."))
    }

    return (
        <div className="keyBoardContainer">
            <button onClick={handleClearClick}>C</button>
            <button onClick={() => handleDigitClick('7')}>7</button>
            <button onClick={() => handleDigitClick('8')}>8</button>
            <button onClick={() => handleDigitClick('9')}>9</button>
            <button onClick={() => handleOperatorClick('/')}>/</button>
            <button onClick={() => handleDigitClick('4')}>4</button>
            <button onClick={() => handleDigitClick('5')}>5</button>
            <button onClick={() => handleDigitClick('6')}>6</button>
            <button onClick={() => handleOperatorClick('*')}>*</button>
            <button onClick={() => handleDigitClick('1')}>1</button>
            <button onClick={() => handleDigitClick('2')}>2</button>
            <button onClick={() => handleDigitClick('3')}>3</button>
            <button onClick={() => handleOperatorClick('-')}>-</button>
            <button onClick={() => handleDigitClick('0')}>0</button>
            <button onClick={handleDecimalClick}>.</button>
            <button onClick={handleEqualClick}>=</button>
            <button onClick={() => handleOperatorClick('+')}>+</button>
        </div>
    )
}