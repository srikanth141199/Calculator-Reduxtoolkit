import { useSelector } from "react-redux"
import "./Display.css"
import { calculateSelector } from "../../redux/Reducers/calculatorReducer"

export default function Display(){

    const {statement, result} = useSelector(calculateSelector)
    return(
        <div className="display">
            <div className="statement">
                {statement? statement : ""} 
            </div>

            <div className="result">
                {result ? result : ""}
            </div>
        </div>
    )
}