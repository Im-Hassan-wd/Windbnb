import Stay from "./stay";
// import data from "../stays.json";

const Home = ({rooms}) => {

    return (
        <>
            <div className="home">
                <div className="home-title">
                    <h1>Stays in Finland</h1>
                    <p>12+ stays</p>
                </div>
            </div>
            
            <Stay rooms={rooms}/>
        </>
    );
}
 
export default Home;