import React, { useState } from "react";
import BASE_URL from "../api";

function EmiCalculator() {
    const [principal, setPrincipal] = useState("");
    const [rate, setRate] = useState("");
    const [tenure, setTenure] = useState("");
    const [result, setResult] = useState(null);

    const calculateEMI = async () => {
        const res = await fetch(
            `${BASE_URL}/emi?principal=${principal}&rate=${rate}&tenure=${tenure}`
        );
        const data = await res.json();
        setResult(data);
    };

    return (
        <div>
            <h2>EMI Calculator</h2>

            <input
                type="number"
                placeholder="Principal"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
            />

            <input
                type="number"
                placeholder="Interest Rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
            />

            <input
                type="number"
                placeholder="Tenure (Months)"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
            />

            <button onClick={calculateEMI}>Calculate</button>

            {result && (
                <p>
                    EMI: ₹{result.emi} <br />
                    Total Interest: ₹{result.totalInterest} <br />
                    Total Amount: ₹{result.totalAmount}
                </p>
            )}
        </div>
    );
}

export default EmiCalculator;
