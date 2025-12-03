import React, { useState } from 'react';
import { calculateAge } from '../services/api';

function AgeCalculator() {
    const [dob, setDob] = useState('');
    const [age, setAge] = useState(null);

    const handleSubmit = async () => {
        if (!dob) return;
        try {
            const result = await calculateAge(dob);
            setAge(result);
        } catch(err) {
            console.error("Fetch error:", err);
        }
    };

    return (
        <div className="calculator-box">
            <h2>Age Calculator</h2>
            <input type="date" value={dob} onChange={e => setDob(e.target.value)} />
            <button onClick={handleSubmit}>Calculate Age</button>
            {age !== null && <p>Age: {age} years</p>}
        </div>
    );
}

export default AgeCalculator;
