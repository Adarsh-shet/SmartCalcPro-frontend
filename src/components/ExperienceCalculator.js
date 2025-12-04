import React, { useState } from 'react';
import { calculateExperience } from '../services/api';

function ExperienceCalculator() {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [exp, setExp] = useState('');

    const handleSubmit = async () => {
        if (!start) return;

        const response = await calculateExperience(start, end);
        setExp(response);
    };

    return (
        <div className="card">
            <h2>Experience Calculator</h2>

            <label>Start Date</label>
            <input type="date" value={start} onChange={(e) => setStart(e.target.value)} />

            <label>End Date (optional)</label>
            <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />

            <button onClick={handleSubmit}>Calculate</button>

            {exp && <p className="result">{exp}</p>}
        </div>
    );
}

export default ExperienceCalculator;
