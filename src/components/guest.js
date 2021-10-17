import minus from "../svg/minus.svg"
import plus from "../svg/plus.svg"

const Guest = () => {
    return (
        <>
        <h4>Adults</h4>
        <p>Age 13 or above</p>
        <div className="number">
            <button><img src={plus} alt="" /></button>
            <p>0</p>
            <button><img src={minus} alt="" /></button>   
        </div>
        </>
    );
}
 
export default Guest;