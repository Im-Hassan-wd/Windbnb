import React, {useState} from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import rooms from "./stays.json"

const App = () => {

  const [showing, setShowing] = useState('active');

  const handleClickAgain = () => {
    setShowing('');
  }

  const handleClick = () => {
    setShowing("active");
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const filterRoom = e.target.value;
    
    rooms.filter(room => room.city === e.target);
  }

  return (
    <div className="page">
      <Header handleSearch={handleSearch} showing={showing} handleClick={handleClick} handleClickAgain={handleClickAgain}/>
      <Home rooms={rooms} />
    </div>
  );
}
 
export default App;
