import React, {useState} from 'react';
import "./GameButtons.css";
import './score.css';
import './reset.css';
import pic1 from "./images/rock-emoji.png";
import pic2 from "./images/paper-emoji.png";
import pic3 from "./images/scissors-emoji.png"

export const GameButtons = () => {
  const [score, setScore]  = useState({ 
    wins: 0,
    losses: 0,
    ties: 0
  });

  const [gameResult, setGameResult] = useState('');
  const [gamemove, setGameMove] = useState('');
  const [computerChoose, setComputerChoose] = useState("Let's Play!");

  //play game function
  function playGame(playerMove){
    const move = pickComputerMove();
    console.log(move);
    let result = '';
    setComputerChoose('Computer Choose');
  
    if (playerMove === 'Scissors'){
    if (move === 'Rock'){
      result = 'You Lost!';
    }else if (move === 'Paper') {
      result = 'You Win!';
    }else {
      result = 'Tie!';
    }
  
    }else if (playerMove === 'Paper'){
      if (move === 'Rock'){
        result = 'You Win!';
      }else if (move === 'Paper') {
        result = 'Tie!';
      }else {
        result = 'You Lost!';
      }
  
    }else if (playerMove === 'Rock') {
    if (move === 'Rock'){
      result = 'Tie!';
    }else if (move === 'Paper') {
      result = 'You Lost!';
    }else {
      result = 'You Win!';
    }
    }
    
    if (result === 'You Win!') {
      setScore(prevScore => ({ ...prevScore, wins: prevScore.wins + 1 }));
    } else if (result === 'You Lost!') {
      setScore(prevScore => ({ ...prevScore, losses: prevScore.losses + 1 }));
    } else if (result === 'Tie!') {
      setScore(prevScore => ({ ...prevScore, ties: prevScore.ties + 1 }));
    }
    console.log(score.wins);

    <>
    <p className='result'>{setGameResult(result)}</p>

    

    </>
  }
  
  //select computer move
  function pickComputerMove(){
    const randomNum = Math.random();
    let move = '';
  
    if (randomNum >=0 && randomNum < (1/3)){
    move = 'Rock';
    }else if (randomNum >=(1/3) && randomNum < (2/3)){
    move = 'Paper';
    }else {
    move = 'Scissors';
    }
    if (move === 'Rock') {
      setGameMove(pic1);
    }
    else if (move === 'Paper'){
      setGameMove(pic2);
    }
    else if (move === 'Scissors'){
      setGameMove(pic3);
    }
    return move;
  }

  //reset button
  const reset = () => {
    setScore(prevScore => ({ ...prevScore, wins: prevScore.wins = 0 }));
    score.losses=0;
    score.ties=0;
    setGameResult('');
    setGameMove('');
    setComputerChoose("Let's Play!");
  }

  
  
  return (
    <>
    <div className='gamebButtons'>
      <button onClick={ () => playGame('Rock')} className="move-btn js-rock-btn">
        <img src={ pic1 } alt="rock" className="move-icon"/>
      </button>

      <button onClick={ () => playGame('Paper')} className="move-btn js-paper-btn">
        <img src={ pic2 } alt='paper' className="move-icon"/>
      </button>

      <button onClick={ () => playGame('Scissors')} className="move-btn js-scissors-btn">
        <img src={ pic3 } alt='scissor' className="move-icon"/>
      </button>
    </div>
    <div>

      {/* showing results */}
      {<p className="result">{gameResult}</p>}

      {/* showing movings */}
      <p className="move">
        {computerChoose}
          <img src={gamemove} alt="" className="move-icon" /> 
        </p>
      
    </div>

    {/* showing scores */}
    <div className='scores'>
      <p>You<br/>{ score.wins }</p>
      <p className='tied'>Tied<br/>{ score.ties }</p>
      <p>Computer<br/>{ score.losses }</p>
    </div>
    <div>
      <button onClick={reset} className="reset-btn">New Game</button>
    </div>
    </>
  )
}
