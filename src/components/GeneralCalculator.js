import React, { useState } from "react";
import { calculateGeneral } from "../services/api";

function GeneralCalculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operation, setOperation] = useState("add");
    const [result, setResult] = useState("");

    const doCalc = async () => {
        if (num1 === "" || num2 === "") return alert("Enter both numbers");

        const res = await calculateGeneral(num1, num2, operation);
        setResult(res);
    };

    return (
        <div className="calculator-box">
            <h2>General Calculator</h2>

            <input type="number" placeholder="Enter first number"
                   value={num1}
                   onChange={(e) => setNum1(e.target.value)} />

            <input type="number" placeholder="Enter second number"
                   value={num2}
                   onChange={(e) => setNum2(e.target.value)} />

            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="add">Addition (+)</option>
                <option value="sub">Subtraction (-)</option>
                <option value="mul">Multiplication (×)</option>
                <option value="div">Division (÷)</option>
            </select>

            <button onClick={doCalc}>Calculate</button>

            {result !== "" && <p className="result-text">Result: {result}</p>}
        </div>
    );
}

export default GeneralCalculator;
