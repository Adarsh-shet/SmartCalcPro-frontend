import React, { useState } from "react";
import { calculateExperience } from "../services/api";

function ExperienceCalculator() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [result, setResult] = useState("");

    const handleSubmit = async () => {
        if (!startDate) return alert("Enter start date");
        
        try {
            const res = await calculateExperience(startDate, endDate);
            setResult(res);
        } catch (err) {
            alert("Error fetching experience");
        }
    };

    return (
        <div className="calculator-box">
            <h2>Experience Calculator</h2>

            <label>Start Date</label>
            <input type="date" value={startDate}
                   onChange={(e) => setStartDate(e.target.value)} />

            <label>End Date (optional)</label>
            <input type="date" value={endDate}
                   onChange={(e) => setEndDate(e.target.value)} />

            <button onClick={handleSubmit}>Calculate Experience</button>

            {result && <p className="result-text">Experience: {result}</p>}
        </div>
    );
}

export default ExperienceCalculator;
