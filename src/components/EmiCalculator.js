import React, { useState } from 'react';
import { calculateEMI } from '../services/api';

function EmiCalculator() {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [months, setMonths] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async () => {
        if (!principal || !rate || !months) { alert("Fill all fields"); return; }
        try {
            const res = await calculateEMI(principal, rate, months);
            setResult(res); // { emi, totalAmount, totalInterest }
        } catch (err) {
            console.error(err); alert("API fetch failed");
        }
    };

    return (
        <div className="calculator-box">
            <h2>EMI Calculator</h2>

            <div className="input">
                <input type="number" placeholder="Principal (e.g. 500000)" value={principal} onChange={e => setPrincipal(e.target.value)} />
                <input type="number" placeholder="Annual Rate % (e.g. 7.5)" value={rate} onChange={e => setRate(e.target.value)} />
                <input type="number" placeholder="Tenure (months) e.g. 60" value={months} onChange={e => setMonths(e.target.value)} />
            </div>

            <button className="button" onClick={handleSubmit}>Calculate EMI</button>

            {result && (
                <div className="result">
                    EMI: ₹{result.emi} <br/>
                    Total Interest: ₹{result.totalInterest} <br/>
                    Total Amount: ₹{result.totalAmount}
                </div>
            )}
        </div>
    );
}

export default EmiCalculator;
