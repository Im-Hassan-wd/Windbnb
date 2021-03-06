import Stay from "./stay";
import Header from "./header";
import React, {useState} from 'react';

import rooms from "../stays.json";

const Home = () => {

    const [room, setRoom] = useState(rooms);

    const [showing, setShowing] = useState('');

    const handleClickAgain = () => {
        setShowing('');
    }

    const handleClick = () => {
        setShowing("active");
    }

    const handleSearch = (e, city) => {
        e.preventDefault();
        
        const newRoom = rooms.filter(room => room.city.toLowerCase() === e.target.children[0].children[1].value.toLowerCase());
        const guest = rooms.filter(room => room.maxGuests === parseInt(e.target.children[1].children[1].value));
        {newRoom.length && setRoom(newRoom)}
        {guest.length && setRoom(guest)}
        setShowing('');
    }

    return (
        <>
            <Header rooms={room} showing={showing} handleClick={handleClick} handleClickAgain={handleClickAgain} handleSearch={handleSearch}/>
            <div className="home">
                <div className="home-title">
                    <h1>Stays in Finland</h1>
                    <p>{room.length} stays</p>
                </div>
            </div>


            {<Stay rooms={room} />}
        </>
    );
}

export default Home;