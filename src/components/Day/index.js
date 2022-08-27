import * as React from 'react';
import './style.css';

export const Day = ({dayName, dayNumber, children}) => {
    return (
        <div className='day-wrapper'>
            <p className='day-name'>{dayName}</p>
            <div className="day-content">
                <p className='day-number'>{dayNumber}</p>
                {children}
            </div>
        </div>
    );
};
