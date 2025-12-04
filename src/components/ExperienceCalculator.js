import React, { useState } from 'react';
import { calculateExperience } from '../services/api';

function ExperienceCalculator() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [experience, setExperience] = useState('');

    const handleSubmit = async () => {
        if (!startDate || !endDate) return;
        try {
            const result = await calculateExperience(startDate, endDate);
            setExperience(result);
        } catch (err) {
            alert("API fetch failed");
        }
    };

    return (
        <div className="calculator-box">
            <h2>Experience Calculator</h2>

            <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
            <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />

            <button onClick={handleSubmit}>Calculate Experience</button>

            {experience && <p>Experience: {experience}</p>}
        </div>
    );
}

export default ExperienceCalculator;
