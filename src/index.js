import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.css';
import App1 from './App1';
import App2 from './App2';


function GameLoad(){
  const [game,changeGame]=useState(1);

  if(game===1){
    return (
      <>
      <App1 />
      
      <button className='feelLucky' onClick={()=>{
        changeGame(2);
      }}>Feeling Lucky?</button>
      </>
    );
  }
  return(
    <>
      <App2 />
      <button className='feelLucky' onClick={()=>{
        changeGame(1);
      }}>Take me back!</button>
      </>
  )

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GameLoad />
  </>
);

