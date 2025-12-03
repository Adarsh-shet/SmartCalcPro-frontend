import { calculateGeneral } from '../services/api';

const handleSubmit = async () => {
    if (!num1 || !num2) return;

    try {
        const result = await calculateGeneral(num1, num2, op);
        setResult(result);
    } catch (error) {
        alert("API error in general calculator");
    }
};
