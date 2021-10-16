import air from '../img/logo.png';
import search from '../img/search.svg';

const Header = ({showing, handleClick, handleClickAgain}) => {

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
                        <div className="location">
                            <small>Loaction</small>
                            <p>Helsinki, Finland</p>
                        </div>
                        <div className="guest">
                           <label htmlFor="">GUESTS</label>
                           <input type="text" placeholder="Add guests"/>
                        </div>
                        <div className="search"><img src={search} alt=""/></div>
                    </div>
                </nav>
            </div> : null
            }
        </>
    );
}
 
export default Header;