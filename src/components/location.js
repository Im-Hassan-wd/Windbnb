import geo from '../svg/geo.svg';

const Location = ({name}) => {
    return (
        <>
            <p><img src={geo} alt="location icon"/>{name}</p>
        </>
    );
}
 
export default Location;