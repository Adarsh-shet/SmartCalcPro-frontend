import React, { useState } from 'react';
import { calculateGeneral } from '../services/api';

function GeneralCalculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [op, setOp] = useState('add');
    const [result, setResult] = useState(null);

    const handleSubmit = async () => {
        if (!num1 || !num2) return;
        try {
            const res = await calculateGeneral(parseFloat(num1), parseFloat(num2), op);
            setResult(res);
        } catch(err) {
            console.error("Fetch error:", err);
        }
    };

    return (
        <div className="calculator-box">
            <h2>General Calculator</h2>
            <input type="number" placeholder="Num 1" value={num1} onChange={e => setNum1(e.target.value)} />
            <input type="number" placeholder="Num 2" value={num2} onChange={e => setNum2(e.target.value)} />
            <select value={op} onChange={e => setOp(e.target.value)}>
                <option value="add">Add</option>
                <option value="subtract">Subtract</option>
                <option value="multiply">Multiply</option>
                <option value="divide">Divide</option>
            </select>
            <button onClick={handleSubmit}>Calculate</button>
            {result !== null && <p>Result: {result}</p>}
        </div>
    );
}

export default GeneralCalculator;
