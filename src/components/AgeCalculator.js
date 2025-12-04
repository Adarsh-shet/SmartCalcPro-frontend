import React, { useState } from "react";
import { calculateAge } from "../services/api";

function AgeCalculator() {
    const [dob, setDob] = useState("");
    const [result, setResult] = useState("");

    const handleSubmit = async () => {
        if (!dob) return alert("Please select your date of birth");

        try {
            const res = await calculateAge(dob);
            setResult(res);
        } catch (err) {
            alert("Failed to fetch age");
        }
    };

    return (
        <div className="calculator-box">
            <h2>Age Calculator</h2>

            <label>Date of Birth</label>
            <input type="date"
                   value={dob}
                   onChange={(e) => setDob(e.target.value)}
                   placeholder="Enter your date of birth" />

            <button onClick={handleSubmit}>Calculate Age</button>

            {result && <p className="result-text">You are: {result}</p>}
        </div>
    );
}

export default AgeCalculator;
