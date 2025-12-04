import React, { useState } from "react";
import { calculateEmi } from "../services/api";

function EmiCalculator() {
    const [p, setP] = useState("");
    const [r, setR] = useState("");
    const [m, setM] = useState("");
    const [emi, setEmi] = useState(null);

    const handleCalculate = async () => {
        if (!p || !r || !m) return alert("Enter all fields");

        const result = await calculateEmi(p, r, m);
        setEmi(result.toFixed(2));
    };

    return (
        <div className="calculator-box">
            <h2>EMI Calculator</h2>

            <input type="number" placeholder="Loan Amount" value={p} onChange={e => setP(e.target.value)} />
            <input type="number" placeholder="Interest Rate (%)" value={r} onChange={e => setR(e.target.value)} />
            <input type="number" placeholder="Duration (Months)" value={m} onChange={e => setM(e.target.value)} />

            <button className="btn" onClick={handleCalculate}>Calculate EMI</button>

            {emi && <p className="result-text">Monthly EMI: ₹{emi}</p>}
        </div>
    );
}
export default EmiCalculator;
