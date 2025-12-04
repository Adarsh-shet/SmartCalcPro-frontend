import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AgeCalculator from './components/AgeCalculator';
import ExperienceCalculator from './components/ExperienceCalculator';
import GeneralCalculator from './components/GeneralCalculator';
import './App.css';

function App() {
    const [page, setPage] = useState('age');

    return (
        <div className="App">
            <h1>SmartCalc Pro</h1>
            <Navbar setPage={setPage} />
            {page === 'age' && <AgeCalculator />}
            {page === 'experience' && <ExperienceCalculator />}
            {page === 'general' && <GeneralCalculator />}
        </div>
    );
}

export default App;
