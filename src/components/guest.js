import {useState} from 'react';

import minus from "../svg/minus.svg"
import plus from "../svg/plus.svg"

const Guest = ({age, stage}) => {

    const [increasing, isIncreasing] = useState(0)
    const [decreasing, isDecreasing] = useState(0)

    const handleIncrease = () => {
        let increase = 0;
        increase ++;
        isIncreasing(increase);
    }

    const handleDecrease = () => {
        let increase = 0;
        increase --;
    }

    return (
        <>
        <h4>{stage}</h4>
        <p>{age}</p>
        <div className="number">
            <button onClick={handleIncrease}><img src={plus} alt="" /></button>
            <p>{increasing}</p>
            <button><img src={minus} alt="" /></button>   
        </div>
        </>
    );
}
 
export default Guest;