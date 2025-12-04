import React, { useState } from 'react';
import { calculateAge } from '../services/api';

function AgeCalculator() {
    const [dob, setDob] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!dob) { alert("Please enter your date of birth"); return; }
        setLoading(true);
        try {
            const res = await calculateAge(dob);
            setResult(res); // { years, months, days, formatted }
        } catch (err) {
            console.error(err);
            alert("API fetch failed");
        } finally { setLoading(false); }
    };

    return (
        <div className="calculator-box">
            <h2>Age Calculator</h2>
            <div className="input">
                <label className="small">Enter your date of birth</label>
                <input type="date" value={dob} onChange={e => setDob(e.target.value)} />
            </div>

            <button className="button" onClick={handleSubmit} disabled={loading}>
                {loading ? "Calculating..." : "Calculate Age"}
            </button>

            {result && <div className="result">{result.formatted}</div>}
        </div>
    );
}

export default AgeCalculator;
