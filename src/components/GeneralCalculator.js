import React, { useState } from 'react';
import { calculateGeneral } from '../services/api';

function GeneralCalculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operation, setOperation] = useState("add");
    const [result, setResult] = useState(null);

    const handleCalculate = async () => {
        if (num1 === "" || num2 === "") return alert("Enter both numbers");
        try {
            const res = await calculateGeneral(num1, num2, operation);
            setResult(res);
        } catch(err) {
            console.error(err);
            alert("API fetch failed");
        }
    };

    return (
        <div className="calculator-box">
            <h2>General Calculator</h2>
            <input type="number" placeholder="Num1" value={num1} onChange={e => setNum1(e.target.value)} />
            <input type="number" placeholder="Num2" value={num2} onChange={e => setNum2(e.target.value)} />
            <select value={operation} onChange={e => setOperation(e.target.value)}>
                <option value="add">Add</option>
                <option value="sub">Subtract</option>
                <option value="mul">Multiply</option>
                <option value="div">Divide</option>
            </select>
            <button onClick={handleCalculate}>Calculate</button>
            {result !== null && <p>Result: {result}</p>}
        </div>
    );
}

export default GeneralCalculator;
