import React from 'react';
import './AdventCalendar.css'; // Make sure to create this CSS file

const AdventCalendar = () => {
    const days = Array.from({ length: 24 }, (_, i) => i + 1);

    const openChallenge = (day) => {
        // Logic to redirect to the challenge of the day
        // window.location.href = `/challenge/${day}`;'
        console.log(`/challenge/${day}`)
    };

    return (
        <div className="advent-calendar">
            {days.map(day => (
                <button key={day} className="calendar-day" onClick={() => openChallenge(day)}>
                    {day}
                </button>
            ))}
        </div>
    );
};

export default AdventCalendar;
