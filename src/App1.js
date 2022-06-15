import './scss/app1.css';
import paper from './images/icon-paper.svg';
import scissor from './images/icon-scissors.svg';
import rock from './images/icon-rock.svg';
import rules from './images/image-rules.svg';
import React, { useEffect, useState } from 'react';

function App1() {

  const [rulesModal,openRulesModal]=useState(0);
  const [win,changeWin]=useState(null);
  const [points,addPoints]=useState(0);
  const [choice1,changeChoice1]=useState(null);
  const [choice2,changeChoice2]=useState(null);

  function makeChoice2(){
    let choice=Math.floor(Math.random()*3);
    changeChoice2(choice===0?"paper":choice===1?"rock":"scissor");

    
  }

  useEffect(()=>{
    console.log(choice1,choice2);
    if((choice1==="paper" && choice2==="rock")|| (choice1==="rock" && choice2==="scissor")||(choice1==="scissor" && choice2==="paper")){
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
    <div className='mainContainer'>
      <div className='gameHeader'>
          <div className='gameName'>
              <h1>
                Rock<br/>
                Paper<br/>
                Scissors
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
      <div className='game'>
        {!choice1 &&
            <div className='triangle'>
              <div className='firstTwo'>
                  <button className='paper' onClick={()=>{
                    changeChoice1("paper")
                    setTimeout(makeChoice2,2000);
                  }}>
                    <img src={paper} alt='paper'></img>
                  </button>
                  <button className='scissor' onClick={()=>{
                    changeChoice1("scissor")
                    setTimeout(makeChoice2,2000);
                    
                  }}>
                    <img src={scissor} alt='scissor'></img>
                  </button>
              </div>
            <div className='last'>
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
          <div className='youPicked'>
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
          <div className='housePicked'>
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
          </div>
        </div>
        
        
        </>
          
        }
          
      </div>
      <div className='rules'>
            <button className='ruleButton' onClick={()=>{
              openRulesModal(!rulesModal);
              if(document.getElementsByClassName("mainContainer")[0].classList.contains("blur")){
                document.getElementsByClassName("mainContainer")[0].classList.remove("blur")
              }
              else{
                document.getElementsByClassName("mainContainer")[0].classList.add("blur")
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
            if(document.getElementsByClassName("mainContainer")[0].classList.contains("blur")){
              document.getElementsByClassName("mainContainer")[0].classList.remove("blur")
            }
            else{
              document.getElementsByClassName("mainContainer")[0].classList.add("blur")
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

export default App1;
