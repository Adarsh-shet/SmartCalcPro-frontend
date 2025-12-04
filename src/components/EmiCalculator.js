import React, { useState } from "react";

function EmiCalculator() {
    const [principal, setPrincipal] = useState("");
    const [rate, setRate] = useState("");
    const [months, setMonths] = useState("");
    const [emi, setEmi] = useState("");

    const calculateEMI = () => {
        if (!principal || !rate || !months)
            return alert("Enter all fields");

        let r = rate / 12 / 100;
        let emiValue =
            (principal * r * Math.pow(1 + r, months)) /
            (Math.pow(1 + r, months) - 1);

        setEmi(emiValue.toFixed(2));
    };

    return (
        <div className="calculator-box">
            <h2>EMI Calculator</h2>

            <input type="number" placeholder="Loan amount (₹)"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)} />

            <input type="number" placeholder="Annual interest rate (%)"
                value={rate}
                onChange={(e) => setRate(e.target.value)} />

            <input type="number" placeholder="Loan period (months)"
                value={months}
                onChange={(e) => setMonths(e.target.value)} />

            <button onClick={calculateEMI}>Calculate EMI</button>

            {emi && <p className="result-text">EMI: ₹{emi}</p>}
        </div>
    );
}

export default EmiCalculator;
