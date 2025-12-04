const BASE_URL = "https://smartcalcpro-backend.onrender.com/api/calc"; // No trailing slash!

// AGE API
export const calculateAge = async (dob) => {
    const res = await fetch(`${BASE_URL}/age?dob=${dob}`);
    return res.json();
};

// EXPERIENCE API
export const calculateExperience = async (startDate) => {
    const res = await fetch(`${BASE_URL}/experience?startDate=${startDate}`);
    return res.json();
};

// GENERAL CALCULATOR
export const calculateGeneral = async (num1, num2, operation) => {
    const res = await fetch(`${BASE_URL}/${operation}?a=${num1}&b=${num2}`);
    return res.json();
};
