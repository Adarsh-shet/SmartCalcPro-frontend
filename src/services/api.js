const BASE_URL = "http://localhost:8080/api/calc";

export const calculateAge = async (dob) => {
    const res = await fetch(`${BASE_URL}/age?dob=${dob}`);
    if (!res.ok) throw new Error("Network response not ok");
    return res.json();
};

export const calculateExperience = async (startDate) => {
    const res = await fetch(`${BASE_URL}/experience?startDate=${startDate}`);
    if (!res.ok) throw new Error("Network response not ok");
    return res.json();
};

export const calculateEMI = async (principal, rate, months) => {
    const res = await fetch(`${BASE_URL}/emi?principal=${principal}&rate=${rate}&months=${months}`);
    if (!res.ok) throw new Error("Network response not ok");
    return res.json();
};

export const calculateGeneral = async (a, b, op) => {
    let endpoint = "";
    switch(op) {
        case "add": endpoint = "add"; break;
        case "subtract": endpoint = "sub"; break;
        case "multiply": endpoint = "mul"; break;
        case "divide": endpoint = "div"; break;
        default: endpoint = "add";
    }
    const res = await fetch(`${BASE_URL}/${endpoint}?a=${a}&b=${b}`);
    if (!res.ok) throw new Error("Network response not ok");
    return res.json();
};
