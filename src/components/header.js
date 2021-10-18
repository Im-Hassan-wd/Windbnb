import { useState } from "react";
import air from '../img/logo.png';
import search from '../svg/search.svg';
import Guest from "./guest";
import Location from "./location"

const Header = ({showing, handleClick, handleClickAgain}) => {

    const [location, isLocation] = useState("active");
    const [guest, isGuest] = useState("");

    const handleClickLocation = () => {
        isLocation("active");
        isGuest("");
    }
    const handleClickGuest = () => {
        isGuest("active");
        isLocation("");
    }

    const handleSearch = () => {
        console.log("handle my serach")
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
                    <div className="filter">
                        <div className="location" onClick={handleClickLocation}>
                            {/* <small>Loaction</small>
                            <p>Helsinki, Finland</p> */}
                            <label htmlFor="location">LOCATION</label>
                           <input onKeyUp={handleSearch} name="location" type="text" placeholder="Helsinki, Finland"/>
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
                    </div>
                    { location === "active" ? <div className="location-tab">
                        <Location name="Helsinki, Finland" />
                        <Location name="Oulu, Finland" />
                        <Location name="Vaasa, Finland" />
                        <Location name="Turku, Finland" />
                    </div> : null}
                    { guest === "active" ? <div className="guest-tab">
                        <Guest age="Age 13 or above" stage="Adults" />
                        <Guest age="Age 2 - 12" stage="Children" />
                    </div> : null}
                </nav>
            </div> : null
            }
        </>
    );
}
 
export default Header;