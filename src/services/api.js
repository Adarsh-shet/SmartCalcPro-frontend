const BASE_URL = process.env.REACT_APP_API_URL;

// AGE API
export const calculateAge = async (dob) => {
    const res = await fetch(`${BASE_URL}/api/calc/age?dob=${dob}`);
    if (!res.ok) throw new Error("API Error");
    return res.json();
};

// EXPERIENCE API
export const calculateExperience = async (startDate) => {
    const res = await fetch(`${BASE_URL}/api/calc/experience?startDate=${startDate}`);
    if (!res.ok) throw new Error("API Error");
    return res.json();
};

// GENERAL CALCULATOR
export const calculateGeneral = async (num1, num2, operation) => {
    const res = await fetch(`${BASE_URL}/api/calc/${operation}?a=${num1}&b=${num2}`);
    if (!res.ok) throw new Error("API Error");
    return res.json();
};

// ADD
export const addNumbers = async (a, b) => {
    const res = await fetch(`${BASE_URL}/api/calc/add?a=${a}&b=${b}`);
    return res.json();
};

// SUB
export const subtractNumbers = async (a, b) => {
    const res = await fetch(`${BASE_URL}/api/calc/sub?a=${a}&b=${b}`);
    return res.json();
};

// MULTIPLY
export const multiplyNumbers = async (a, b) => {
    const res = await fetch(`${BASE_URL}/api/calc/mul?a=${a}&b=${b}`);
    return res.json();
};

// DIVIDE
export const divideNumbers = async (a, b) => {
    const res = await fetch(`${BASE_URL}/api/calc/div?a=${a}&b=${b}`);
    return res.json();
};
