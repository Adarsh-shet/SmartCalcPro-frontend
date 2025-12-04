const BASE_URL = (process.env.REACT_APP_API_URL || "").replace(/\/+$/, "");

// AGE
export const calculateAge = async (dob) => {
    const res = await fetch(`${BASE_URL}/api/calc/age?dob=${dob}`);
    if (!res.ok) throw new Error("API Error");
    return res.json(); // returns { years, months, days, formatted }
};

// EXPERIENCE (startDate required, endDate optional)
export const calculateExperience = async (startDate, endDate = null) => {
    const url = endDate ? `${BASE_URL}/api/calc/experience?startDate=${startDate}&endDate=${endDate}` :
                          `${BASE_URL}/api/calc/experience?startDate=${startDate}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("API Error");
    return res.json();
};

// GENERAL calculator (add/sub/mul/div)
export const calculateGeneral = async (num1, num2, operation) => {
    const res = await fetch(`${BASE_URL}/api/calc/${operation}?a=${num1}&b=${num2}`);
    if (!res.ok) throw new Error("API Error");
    return res.json(); // returns a number
};

// EMI
export const calculateEMI = async (principal, rate, months) => {
    const res = await fetch(`${BASE_URL}/api/calc/emi?principal=${principal}&rate=${rate}&months=${months}`);
    if (!res.ok) throw new Error("API Error");
    return res.json(); // returns { emi, totalAmount, totalInterest }
};
