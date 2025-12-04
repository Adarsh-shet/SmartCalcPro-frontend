const BASE_URL = process.env.REACT_APP_API_URL;

// AGE
export const calculateAge = async (dob) => {
    const res = await fetch(`${BASE_URL}/api/calc/age?dob=${dob}`);
    return res.json();
};

// EXPERIENCE
export const calculateExperience = async (startDate, endDate) => {
    const res = await fetch(`${BASE_URL}/api/calc/experience?startDate=${startDate}&endDate=${endDate}`);
    return res.json();
};

// GENERAL
export const calculateGeneral = async (num1, num2, operation) => {
    const res = await fetch(`${BASE_URL}/api/calc/${operation}?a=${num1}&b=${num2}`);
    return res.json();
};

// EMI
export const calculateEmi = async (p, r, m) => {
    const res = await fetch(`${BASE_URL}/api/calc/emi?principal=${p}&rate=${r}&months=${m}`);
    return res.json();
};
