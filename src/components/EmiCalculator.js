// import React, { useState } from 'react';
// import { calculateEMI } from '../services/api';

// function EmiCalculator() {
//     const [principal, setPrincipal] = useState('');
//     const [rate, setRate] = useState('');
//     const [months, setMonths] = useState('');
//     const [emi, setEmi] = useState(null);

//     const handleSubmit = async () => {
//         if (!principal || !rate || !months) return;
//         try {
//             const result = await calculateEMI(principal, rate, months);
//             setEmi(result.toFixed(2));
//         } catch(err) {
//             console.error("Fetch error:", err);
//         }
//     };

//     return (
//         <div className="calculator-box">
//             <h2>EMI Calculator</h2>
//             <input type="number" placeholder="Principal" value={principal} onChange={e => setPrincipal(e.target.value)} />
//             <input type="number" placeholder="Rate (%)" value={rate} onChange={e => setRate(e.target.value)} />
//             <input type="number" placeholder="Tenure (Months)" value={months} onChange={e => setMonths(e.target.value)} />
//             <button onClick={handleSubmit}>Calculate EMI</button>
//             {emi !== null && <p>EMI: {emi}</p>}
//         </div>
//     );
// }

// export default EmiCalculator;
