import React, { useState } from 'react';
import { calculateExperience } from '../services/api';

function ExperienceCalculator() {
    const [startDate, setStartDate] = useState('');
    const [experience, setExperience] = useState('');

    const handleSubmit = async () => {
        if (!startDate) return;
        try {
            const result = await calculateExperience(startDate);
            setExperience(result);
        } catch(err) {
            console.error("Fetch error:", err);
        }
    };

    return (
        <div className="calculator-box">
            <h2>Experience Calculator</h2>
            <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
            <button onClick={handleSubmit}>Calculate Experience</button>
            {experience && <p>Experience: {experience}</p>}
        </div>
    );
}

export default ExperienceCalculator;
