import React, { useState } from 'react';
import { calculateAge } from '../services/api';

function AgeCalculator() {
    const [dob, setDob] = useState('');
    const [age, setAge] = useState(null);

    const handleSubmit = async () => {
        if (!dob) return alert("Please select your Date of Birth");
        try {
            const result = await calculateAge(dob);
            setAge(result);
        } catch(err) {
            console.error(err);
            alert("API error");
        }
    };

    return (
        <div className="calculator-box">
            <h2>🎂 Age Calculator</h2>

            <input 
                type="date"
                placeholder="Enter your date of birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
            />

            <button onClick={handleSubmit}>Calculate Age</button>

            {age && <p><strong>Your Age:</strong> {age}</p>}
        </div>
    );
}

export default AgeCalculator;
