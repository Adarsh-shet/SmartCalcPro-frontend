import React, { useState } from "react";
import BASE_URL from "../api";

function GeneralCalculator() {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState(null);

    const calculateGeneral = async () => {
        const res = await fetch(
            `${BASE_URL}/general?expression=${encodeURIComponent(expression)}`
        );
        const data = await res.json();
        setResult(data);
    };

    return (
        <div>
            <h2>General Calculator</h2>

            <input
                type="text"
                placeholder="Enter expression, e.g., 10+20*3"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
            />

            <button onClick={calculateGeneral}>Calculate</button>

            {result !== null && <p>Result: {result}</p>}
        </div>
    );
}

export default GeneralCalculator;
