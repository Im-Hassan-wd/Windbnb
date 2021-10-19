import {useState} from 'react';

import minus from "../svg/minus.svg"
import plus from "../svg/plus.svg"

const Guest = ({age, stage, handleDecrease, handleIncrease, increasing}) => {


    return (
        <>
        <h4>{stage}</h4>
        <p>{age}</p>
        <div className="number">
            <button onClick={handleIncrease}><img src={plus} alt="" /></button>
            <p>{increasing}</p>
            <button onClick={handleDecrease}><img src={minus} alt="" /></button>   
        </div>
        </>
    );
}
 
export default Guest;