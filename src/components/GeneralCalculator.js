import React, { useState } from "react";
import { calculateGeneral } from "../services/api";

function GeneralCalculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operation, setOperation] = useState("add");
    const [result, setResult] = useState(null);

    const handleCalculate = async () => {
        if (num1 === "" || num2 === "") {
            alert("Please enter both numbers");
            return;
        }

        try {
            const res = await calculateGeneral(num1, num2, operation);
            setResult(res.result);
        } catch (err) {
            alert("Error calling API");
        }
    };

    return (
        <div>
            <h2>General Calculator</h2>

            <input
                type="number"
                placeholder="Enter number 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />

            <input
                type="number"
                placeholder="Enter number 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />

            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="add">Addition</option>
                <option value="sub">Subtraction</option>
                <option value="mul">Multiplication</option>
                <option value="div">Division</option>
            </select>

            <button onClick={handleCalculate}>Calculate</button>

            {result !== null && (
                <h3>Result: {result}</h3>
            )}
        </div>
    );
}

export default GeneralCalculator;
