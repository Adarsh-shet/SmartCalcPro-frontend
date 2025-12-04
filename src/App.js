import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AgeCalculator from './components/AgeCalculator';
import ExperienceCalculator from './components/ExperienceCalculator';
import EmiCalculator from './components/EmiCalculator';
import GeneralCalculator from './components/GeneralCalculator';
import './App.css';

function App() {
    const [page, setPage] = useState('age');

    return (
        <div className="App">
            <header>
                <h1>SmartCalc <span className="pro">Pro</span></h1>
                <p className="tag">Fast • Bright • Friendly</p>
            </header>

            <Navbar setPage={setPage} />

            <main>
                {page === 'age' && <AgeCalculator />}
                {page === 'experience' && <ExperienceCalculator />}
                {page === 'emi' && <EmiCalculator />}
                {page === 'general' && <GeneralCalculator />}
            </main>

            <footer>
                <small>SmartCalcPro — colorful UI (Option C) — No dark mode</small>
            </footer>
        </div>
    );
}

export default App;
