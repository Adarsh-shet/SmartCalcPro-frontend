const BASE_URL = process.env.REACT_APP_API_URL;

// AGE API
export const calculateAge = async (dob) => {
    const res = await fetch(`${BASE_URL}/api/calc/age?dob=${dob}`);
    if (!res.ok) throw new Error("API Error");
    return res.text();
};

// EXPERIENCE API
export const calculateExperience = async (startDate) => {
    const res = await fetch(`${BASE_URL}/api/calc/experience?startDate=${startDate}`);
    if (!res.ok) throw new Error("API Error");
    return res.text();
};

// GENERAL CALCULATOR
export const calculateGeneral = async (num1, num2, operation) => {
    const res = await fetch(`${BASE_URL}/api/calc/${operation}?a=${num1}&b=${num2}`);
    if (!res.ok) throw new Error("API Error");
    return res.json();
};
