import React, { useState } from "react";
import BASE_URL from "../api";

function AgeCalculator() {
    const [dob, setDob] = useState("");
    const [result, setResult] = useState(null);

    const calculateAge = async () => {
        if (!dob) return;

        const res = await fetch(`${BASE_URL}/age?dob=${dob}`);
        const data = await res.json();
        setResult(data);
    };

    return (
        <div>
            <h2>Age Calculator</h2>

            <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
            />

            <button onClick={calculateAge}>Calculate</button>

            {result && (
                <p>
                    Age: {result.years} years, {result.months} months,{" "}
                    {result.days} days
                </p>
            )}
        </div>
    );
}

export default AgeCalculator;
