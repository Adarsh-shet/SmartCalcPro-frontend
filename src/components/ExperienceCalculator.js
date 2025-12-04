import React, { useState } from 'react';
import { calculateExperience } from '../services/api';

function ExperienceCalculator() {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [data, setData] = useState(null);

    const handleSubmit = async () => {
        if (!start || !end) return alert("Please select both dates");

        const result = await calculateExperience(start, end);
        setData(result);
    };

    return (
        <div className="calculator-box">
            <h2>Experience Calculator</h2>

            <input type="date" value={start} onChange={e => setStart(e.target.value)} />
            <input type="date" value={end} onChange={e => setEnd(e.target.value)} />

            <button className="btn" onClick={handleSubmit}>Calculate Experience</button>

            {data && (
                <p className="result-text">
                    {data.years} Years, {data.months} Months, {data.days} Days
                </p>
            )}
        </div>
    );
}
export default ExperienceCalculator;
