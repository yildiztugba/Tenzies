import logo from './logo.svg';
import './App.css';
import React from "react"
import ReactDom from "react-dom"
import Die from "./Die"
import {nanoid } from "nanoid"
import Confetti from "react-confetti"



function App() {

const [allDice, setAllDice] = React.useState(allNewDice())
const [tenzies, setTenzies] = React.useState(false)

React.useEffect(()=>{
  const allDiceHeld= allDice.every(dice=>dice.isHeld === true)
  const firstValue= allDice[0].value
  const allSameValue = allDice.every(dice=>dice.value === firstValue) 

  if(allDiceHeld && allSameValue){
    setTenzies(true)
    console.log("You won")
  }
},
[allDice])
function allNewDice(){
  
    const newDice=[];
    for(let i=0; i<10; i++){
        newDice.push ({
          value: Math.round(Math.random(6)*6),
          isHeld: false,
          id: nanoid()
        })
    }
    
    return newDice
}

function generateNewDice(){
  if(tenzies){
      setAllDice(allNewDice())
      setTenzies(false)
  }
  else{
  
    setAllDice(oldDice=>{
      return oldDice.map(dice=>{
      return dice.isHeld === true ?  dice :
        {
            value: Math.round(Math.random(6)*6),
            isHeld: false,
            id: nanoid()
          }
      })
    })
  }
    
  
  
}

function holdDice(id){
setAllDice((oldDice)=>{
return oldDice.map((dice)=>{
  return dice.id===id ? {...dice, isHeld: !dice.isHeld } : dice
    })
  })
}

const diceElement = allDice.map(dice=>{
          return <Die key={dice.id} value={dice.value} isHeld={dice.isHeld} holdDice={()=>holdDice(dice.id)}/>})

  return (
    
  <main>
  {tenzies && <Confetti/>} 
    <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
    <div className="dice-container">
      {diceElement}
      </div>
      <button
      className="roll-dice"
      onClick={generateNewDice} >{tenzies ? "New game" : "Roll"}
        </button>
  </main>
  );
}

export default App;
