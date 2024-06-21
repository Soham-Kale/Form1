import React from 'react';
import { useLocation } from 'react-router-dom';
import './Summary.css';

const SummaryPage = () => {
    const location = useLocation();
    const { state } = location;

    return (
        <div className="summary-container">
            <h2>Submitted Data</h2>
            <p>Name: {state.name}</p>
            <p>Email: {state.email}</p>
            <p>Age: {state.age}</p>
            <p>Attending with guest: {state.attendingWithGuest}</p>
            {state.attendingWithGuest === 'Yes' && <p>Guest Name: {state.guestName}</p>}
        </div>
    );
};

export default SummaryPage;
