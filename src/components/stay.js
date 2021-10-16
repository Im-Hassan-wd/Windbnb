import { useEffect } from "react";
import data from "../stays.json"
import rate from "../svg/rate.svg"

const Stay = () => {

    useEffect(() => {
    }, []);


    return (
       <div className="stay">
           {data.map(room => (
               <div className="room-preview" key={room.id}>
                   <img className="room-preview-img" src={room.photo} alt="" />
                   <div className="description">
                       <div className="special">
                            {room.superHost && <p className="host">SUPER HOST</p>}
                            <h4>{room.type}</h4>
                       </div>
                       <div className="rating">
                            <img className="rate" src={rate} alt="" />
                            <p>{room.rating}</p>
                        </div>
                   </div>
                   <h3 className="name">{room.title}</h3>
               </div>
           ))}
       </div>
    );
}
 
export default Stay;