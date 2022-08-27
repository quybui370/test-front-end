import * as React from 'react';
import './style.css';
import {WorkoutItem} from "../WorkoutItem";
import iconPlus from '../../assets/add-circle.svg';
import {useRef} from "react";

export const WorkoutContainer = ({parentIndex, childIndex, item, onClickAddItem}) => {
    const lastChar = item.items[item.items.length - 1].itemName.split(' ').pop();
    let count = useRef(0);

    return (
        <div key={childIndex} className='workout-container'>
            <div className='title'>
                <p className='workout-container-name text-limit flex-1'>{item.name}</p>
                <div className='text-nowrap'>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                </div>
            </div>
            {item.items.map((workoutItem, index) => (
                <WorkoutItem key={`${index}${workoutItem.itemName}`} workout={workoutItem}/>
            ))}
            <div className='text-end'>
                <a href='/' onClick={(event) => {
                    count.current++;
                    onClickAddItem(event, parentIndex, childIndex, lastChar, count.current);
                }}>
                    <img className='icon' src={iconPlus} alt="Icon plus"/>
                </a>
            </div>
        </div>
    );
};
