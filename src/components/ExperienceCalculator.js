import React, { useState } from 'react';
import { calculateExperience } from '../services/api';

function ExperienceCalculator() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async () => {
        if (!startDate) { alert("Please select start date"); return; }
        try {
            const res = await calculateExperience(startDate, endDate || null);
            setResult(res); // { years, months, days, formatted }
        } catch (err) {
            console.error(err); alert("API fetch failed");
        }
    };

    return (
        <div className="calculator-box">
            <h2>Experience Calculator</h2>
            <div className="input">
                <label className="small">Start Date</label>
                <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
            </div>
            <div className="input">
                <label className="small">End Date (leave empty for today)</label>
                <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
            </div>

            <button className="button" onClick={handleSubmit}>Calculate Experience</button>

            {result && <div className="result">{result.formatted}</div>}
        </div>
    );
}

export default ExperienceCalculator;
