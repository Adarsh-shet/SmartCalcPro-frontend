import React, { useState } from 'react';
import { calculateAge } from '../services/api';

function AgeCalculator() {
    const [dob, setDob] = useState('');
    const [data, setData] = useState(null);

    const handleSubmit = async () => {
        if (!dob) return alert("Please select your Date of Birth");

        const result = await calculateAge(dob);
        setData(result);
    };

    return (
        <div className="calculator-box">
            <h2>Age Calculator</h2>

            <input
                type="date"
                placeholder="Enter your Date of Birth"
                value={dob}
                onChange={e => setDob(e.target.value)}
            />

            <button className="btn" onClick={handleSubmit}>Calculate Age</button>

            {data && (
                <p className="result-text">
                    {data.years} Years, {data.months} Months, {data.days} Days
                </p>
            )}
        </div>
    );
}
export default AgeCalculator;
