import Stay from "./stay";

const Home = () => {

    return (
        <>
            <div className="home">
                <div className="home-title">
                    <h1>Stays in Finland</h1>
                    <p>12+ stays</p>
                </div>
            </div>
            
            <Stay/>
        </>
    );
}
 
export default Home;