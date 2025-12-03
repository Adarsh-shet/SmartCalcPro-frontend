import React from 'react';

function Navbar({ setPage }) {
    return (
        <nav className="navbar">
            <button onClick={() => setPage('age')}>Age</button>
            <button onClick={() => setPage('experience')}>Experience</button>
            <button onClick={() => setPage('emi')}>EMI</button>
            <button onClick={() => setPage('general')}>Calculator</button>
        </nav>
    );
}

export default Navbar;
