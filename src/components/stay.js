import rate from "../svg/rate.svg"

const Stay = ({rooms}) => {

    return (
       <div className="stay">
           {rooms && rooms.map(room => (
               <div className="room-preview" key={room.id}>
                   {/* <img className="room-preview-img" src={room.photo} alt={room.title} /> */}
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
           {rooms.length === 0 && <h1>City is not available</h1>}
       </div>
    );
}
 
export default Stay;