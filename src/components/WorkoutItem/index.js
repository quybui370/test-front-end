import * as React from 'react';
import './style.css';

export const WorkoutItem = ({workout}) => {
    return (
        <div className='workout-item'>
            <p className='workout-number mb-0'>{workout.numberExercises}x</p>
            <div className="flex-1 text-end overflow-hidden">
                <p className='workout-name text-limit'>{workout.itemName}</p>
                <p className='workout-info mb-0 text-limit'>{workout.info}</p>
            </div>
        </div>
    );
};
