import React, { useState } from 'react';
import { calculateAge } from '../services/api';

function AgeCalculator() {
    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async () => {
        if (!dob) return;
        try {
            const result = await calculateAge(dob);
            setAge(result);
        } catch (err) {
            alert("API error");
        }
    };

    return (
        <div className="card">
            <h2>Age Calculator</h2>

            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />

            <button onClick={handleSubmit}>Calculate</button>

            {age && <p className="result">{age}</p>}
        </div>
    );
}

export default AgeCalculator;
