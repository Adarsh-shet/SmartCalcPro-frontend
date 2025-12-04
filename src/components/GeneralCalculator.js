import React, { useState } from "react";
import { calculateGeneral } from "../services/api";

function GeneralCalculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [op, setOp] = useState("add");
    const [result, setResult] = useState(null);

    const handleCalculate = async () => {
        const res = await calculateGeneral(num1, num2, op);
        setResult(res);
    };

    return (
        <div className="calculator-box">
            <h2>General Calculator</h2>

            <input type="number" placeholder="Enter first number" value={num1} onChange={e => setNum1(e.target.value)} />
            <input type="number" placeholder="Enter second number" value={num2} onChange={e => setNum2(e.target.value)} />

            <select value={op} onChange={e => setOp(e.target.value)}>
                <option value="add">Addition</option>
                <option value="sub">Subtraction</option>
                <option value="mul">Multiplication</option>
                <option value="div">Division</option>
            </select>

            <button className="btn" onClick={handleCalculate}>Calculate</button>

            {result !== null && <p className="result-text">Result: {result}</p>}
        </div>
    );
}

export default GeneralCalculator;
