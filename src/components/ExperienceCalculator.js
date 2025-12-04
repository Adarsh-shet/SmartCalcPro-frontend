import React, { useState } from 'react';
import { calculateExperience } from '../services/api';

function ExperienceCalculator() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [exp, setExp] = useState(null);

    const handleSubmit = async () => {
        if (!startDate) return alert("Please enter start date");

        try {
            const result = await calculateExperience(startDate, endDate);
            setExp(result);
        } catch(err) {
            alert("API error");
        }
    };

    return (
        <div className="calculator-box">
            <h2>💼 Experience Calculator</h2>

            <input 
                type="date"
                placeholder="Start Date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />

            <input 
                type="date"
                placeholder="End Date (optional)"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />

            <button onClick={handleSubmit}>Calculate Experience</button>

            {exp && <p><strong>Experience:</strong> {exp}</p>}
        </div>
    );
}

export default ExperienceCalculator;
