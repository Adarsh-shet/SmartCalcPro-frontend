// Ensure no trailing slash from environment variable
const BASE = process.env.REACT_APP_API_URL?.replace(/\/+$/, "") || "";

// Helper function to call API safely
const apiGet = async (path) => {
    const res = await fetch(`${BASE}${path}`);

    if (!res.ok) {
        console.error("API ERROR:", res.status, res.statusText);
        throw new Error("API Error");
    }

    return res.json();
};

// AGE API
export const calculateAge = async (dob) => {
    return apiGet(`/api/calc/age?dob=${dob}`);
};

// EXPERIENCE API
export const calculateExperience = async (startDate) => {
    return apiGet(`/api/calc/experience?startDate=${startDate}`);
};

// GENERAL CALCULATOR
export const calculateGeneral = async (num1, num2, operation) => {
    return apiGet(`/api/calc/${operation}?a=${num1}&b=${num2}`);
};

// Specific Operations (optional but kept)
export const addNumbers = async (a, b) => {
    return apiGet(`/api/calc/add?a=${a}&b=${b}`);
};

export const subtractNumbers = async (a, b) => {
    return apiGet(`/api/calc/sub?a=${a}&b=${b}`);
};

export const multiplyNumbers = async (a, b) => {
    return apiGet(`/api/calc/mul?a=${a}&b=${b}`);
};

export const divideNumbers = async (a, b) => {
    return apiGet(`/api/calc/div?a=${a}&b=${b}`);
};
