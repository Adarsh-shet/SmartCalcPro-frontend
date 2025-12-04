import React, { useState } from "react";
import BASE_URL from "../api";

function ExperienceCalculator() {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [result, setResult] = useState(null);

    const calculateExperience = async () => {
        const res = await fetch(
            `${BASE_URL}/experience?startDate=${startDate}&endDate=${endDate}`
        );
        const data = await res.json();
        setResult(data);
    };

    return (
        <div>
            <h2>Experience Calculator</h2>

            <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />

            <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />

            <button onClick={calculateExperience}>Calculate</button>

            {result && (
                <p>
                    Experience: {result.years} years, {result.months} months,{" "}
                    {result.days} days
                </p>
            )}
        </div>
    );
}

export default ExperienceCalculator;
