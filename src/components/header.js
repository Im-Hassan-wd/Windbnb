import { useState } from "react";
import air from '../img/logo.png';
import search from '../svg/search.svg';
import Guest from "./guest";
import Location from "./location"

const Header = ({showing, handleClick, handleClickAgain, handleSearch, rooms}) => {

    const [location, setLocation] = useState("active");
    const [guest, setGuest] = useState("");

    const handleClickLocation = () => {
        setLocation("active");
        setGuest("");
    }
    const handleClickGuest = () => {
        setGuest("active");
        setLocation("");
    }

    const [increasing, setIncreasing] = useState(0);

    const handleIncrease = () => {
        setIncreasing(increasing +1);
    }

    const handleDecrease = () => {
        setIncreasing(increasing -1);
        if(increasing === 0) {
          setIncreasing(0)  
        }
    }

    return (
        <>
            <header className="header">
                <h1><img src={air} alt="" /></h1>
                <div className="filter" onClick={handleClick}>
                    <div className="location">Helsinki, Finland</div>
                    <div className="guest">Add guest</div>
                    <div className="search">
                        <img src={search} alt=""/>
                    </div>
                </div>
            </header>

            {showing === "active" ?
            <div>
                <div className="overlay" onClick={handleClickAgain}></div>
                <nav>
                    <form onSubmit={(e) => handleSearch(e, rooms.map(room => room.maxGuests))} className="filter">
                        <div className="location" onClick={handleClickLocation}>
                            <label htmlFor="location">LOCATION</label>
                            <input name="location" type="text" placeholder="Helsinki, Finland"/>
                        </div>
                        <div className="guest" onClick={handleClickGuest}>
                           <label htmlFor="guest">GUESTS</label>
                           <input name="guest" type="text" placeholder="Add guests"/>
                        </div>
                        <div className="search">
                            <button>
                                <img src={search} alt=""/>
                                search
                            </button>
                        </div>
                    </form>
                    { location === "active" ? <div className="location-tab">
                        <Location name="Helsinki, Finland" />
                        <Location name="Oulu, Finland" />
                        <Location name="Vaasa, Finland" />
                        <Location name="Turku, Finland" />
                    </div> : null}
                    { guest === "active" ? <div className="guest-tab">
                        <Guest age="Age 13 or above" stage="Adults" increasing={increasing} handleIncrease={handleIncrease} handleDecrease={handleDecrease}/>
                        <Guest age="Age 2 - 12" stage="Children" />
                    </div> : null}
                </nav>
            </div> : null
            }
        </>
    );
}
 
export default Header;