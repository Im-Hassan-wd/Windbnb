import React, {useState} from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';

const App = () => {

  const [showing, isShowing] = useState('active');

  const handleClickAgain = () => {
    isShowing('');
  }

  const handleClick = () => {
    isShowing("active");
  }

  return (
    <div className="page">
      <Header showing={showing} handleClick={handleClick} handleClickAgain={handleClickAgain}/>
      <Home/>
    </div>
  );
}
 
export default App;
