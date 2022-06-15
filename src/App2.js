import './scss/app2.css';
import paper from './images/icon-paper.svg';
import scissor from './images/icon-scissors.svg';
import rock from './images/icon-rock.svg';
import lizard from './images/icon-lizard.svg';
import spock from './images/icon-spock.svg';
import rules from './images/image-rules-bonus.svg';

import React, { useEffect, useState } from 'react';

function App2() {
  
  const [rulesModal,openRulesModal]=useState(0);
  const [win,changeWin]=useState(null);
  const [points,addPoints]=useState(0);
  const [choice1,changeChoice1]=useState(null);
  const [choice2,changeChoice2]=useState(null);

  function makeChoice2(){
    let choice=Math.floor(Math.random()*5);
    changeChoice2(choice===0?"paper":choice===1?"rock":choice===2?"scissor":choice===3?"spock":"lizard");

    
  }

  useEffect(()=>{
    console.log(choice1,choice2);
    if((choice1==="paper" && choice2==="rock")|| (choice1==="rock" && choice2==="scissor")||(choice1==="scissor" && choice2==="paper")||(choice1==="scissor" && choice2==="lizard")||(choice1==="paper" && choice2==="spock")||(choice1==="rock" && choice2==="lizard")||(choice1==="spock" && choice2==="rock")||(choice1==="spock" && choice2==="scissor")||(choice1==="lizard" && choice2==="spock")||(choice1==="lizard" && choice2==="paper")){
      console.log("I am in");
      addPoints(points+1);
      changeWin(1);
      document.getElementsByClassName('result')[0].classList.add("resultPrint");

    }
    else if(choice1===choice2 && choice1){
      changeWin(0);
      document.getElementsByClassName('result')[0].classList.add("resultPrint");
    }
    else if(choice1){
      changeWin(2);
      document.getElementsByClassName('result')[0].classList.add("resultPrint");
    }
  },[choice2])


  function reset(){
    changeWin(null);
    changeChoice1(null);
    changeChoice2(null);
  }

  return (
    <>
    <div className='mainContainer2'>
      <div className='gameHeader2'>
          <div className='gameName'>
              <h1>
                Rock<br/>
                Paper<br/>
                Scissors<br/>
                Lizard<br/>
                Spock
              </h1>
          </div>
          <div className='score'>
              <div className='scoreTitle'>
                Score
              </div>
              <div className='actualScore'>
                {points}
              </div>
            
          </div>
      </div>
      <div className='game2'>
        {!choice1 &&
            <div className='pentagon'>
              <div className='first'>
              <button className='scissor' onClick={()=>{
                    changeChoice1("scissor")
                    setTimeout(makeChoice2,2000);
                    
                  }}>
                    <img src={scissor} alt='scissor'></img>
                  </button>
              </div>
              <div className='secondTwo'>
                  <button className='spock' onClick={()=>{
                    changeChoice1("spock")
                    setTimeout(makeChoice2,2000);
                    
                  }}>
                    <img src={spock} alt='spock'></img>
                  </button>
                  <button className='paper' onClick={()=>{
                    changeChoice1("paper")
                    setTimeout(makeChoice2,2000);
                  }}>
                    <img src={paper} alt='paper'></img>
                  </button>
                  
              </div>
            <div className='lastTwo'>
            <button className='lizard' onClick={()=>{
                  changeChoice1("lizard")
                  setTimeout(makeChoice2,2000);
                 
                  
                }}>
                <img src={lizard} alt='lizard'></img>
              </button>
              <button className='rock' onClick={()=>{
                  changeChoice1("rock")
                  setTimeout(makeChoice2,2000);
                 
                  
                }}>
                <img src={rock} alt='rock'></img>
              </button>
        </div>
        </div>
        }
        {choice1 && 
        <>
        {win===1 &&
          <div className='party1'>
            
          </div>
        }
        {win===2 &&
          <div className='party2'>
            
          </div>
        }
        <div className='result'>
          <div className='youPicked2'>
            <h1>You Picked</h1>
            {choice1==="paper" &&
              <div className='paperPicked'>
                  <img src={paper} alt='paper'></img>
              </div>
            }
            {choice1==="scissor" &&
              <div className='scissorPicked'>
                  <img src={scissor} alt='scissor'></img>
              </div>
            }
            {choice1==="rock" &&
              <div className='rockPicked'>
                  <img src={rock} alt='rock'></img>
              </div>
            }
            {choice1==="spock" &&
              <div className='spockPicked'>
                  <img src={spock} alt='spock'></img>
              </div>
            }
            {choice1==="lizard" &&
              <div className='lizardPicked'>
                  <img src={lizard} alt='lizard'></img>
              </div>
            }
            
          </div>
          <div className='middleRes'>
              {choice2 && (win===1) &&

                <div className='resultTitle'>
                  You Win
                </div>
              }
              {choice2 && (win===2) &&

                <div className='resultTitle'>
                  You Lose
                </div>
              }
              {choice2 && (win===0) &&

                  <div className='resultTitle'>
                    Draw
                  </div>
              }
              {choice2 &&
                <button className='playAgain' onClick={reset}>
                  Play Again
                </button>
              }
          </div>
          <div className='housePicked2'>
            <h1>House Picked</h1>
            {
              !choice2 && 
              <div className='notPicked'>
                  <span className='question'>?</span>
              </div>
            }
            {choice2==="paper" &&
              <div className='paperPicked'>
                  <img src={paper} alt='paper'></img>
              </div>
            }
            {choice2==="scissor" &&
              <div className='scissorPicked'>
                  <img src={scissor} alt='scissor'></img>
              </div>
            }
            {choice2==="rock" &&
              <div className='rockPicked'>
                  <img src={rock} alt='rock'></img>
              </div>
            }
            {choice2==="spock" &&
              <div className='spockPicked'>
                  <img src={spock} alt='spock'></img>
              </div>
            }
            {choice2==="lizard" &&
              <div className='lizardPicked'>
                  <img src={lizard} alt='lizard'></img>
              </div>
            }
          </div>
        </div>
        
        
        </>
          
        }
          
      </div>
      <div className='rules'>
            <button className='ruleButton' onClick={()=>{
              openRulesModal(!rulesModal);
              if(document.getElementsByClassName("mainContainer2")[0].classList.contains("blur")){
                document.getElementsByClassName("mainContainer2")[0].classList.remove("blur")
              }
              else{
                document.getElementsByClassName("mainContainer2")[0].classList.add("blur")
              }
            }}>Rules</button>
      </div>
      
      
    </div>
    {rulesModal===true && 
      <div className='rulesModal'>
        <div className='rulesModalHead'>
          <h2>Rules</h2>
          <button className='modalClose' onClick={()=>{
            openRulesModal(!rulesModal);
            if(document.getElementsByClassName("mainContainer2")[0].classList.contains("blur")){
              document.getElementsByClassName("mainContainer2")[0].classList.remove("blur")
            }
            else{
              document.getElementsByClassName("mainContainer2")[0].classList.add("blur")
            }
          }}>
            <span className='modalCloseLine'></span>
          </button>
        </div>
        <div className='rulesModalBody'>
          <img src={rules} alt="rules" />
        </div>
      </div>
    }
    </>
  );
}

export default App2;
