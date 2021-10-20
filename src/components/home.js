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
        console.log(e.target.children[1].children[1].value)
        
        const newRoom = rooms.filter(room => room.city.toLowerCase() === e.target.children[0].children[1].value.toLowerCase());
        const guest = rooms.filter(room => room.maxGuests === parseInt(e.target.children[1].children[1].value));
        // setRoom(newRoom);
        console.log(guest);
        // setRoom(guest);
        setShowing('');
    }

    // const handleSearchAgain = (e) => {
    //     const guest = rooms.filter(room => room.maxGuests === e.target.children[1].children[1].value);
    //     setRoom(guest);
    // }

    return (
        <>
            <Header rooms={room} showing={showing} handleClick={handleClick} handleClickAgain={handleClickAgain} handleSearch={handleSearch}/>
            <div className="home">
                <div className="home-title">
                    <h1>Stays in Finland</h1>
                    <p>12+ stays</p>
                </div>
            </div>


            {<Stay rooms={room} />}
        </>
    );
}

export default Home;