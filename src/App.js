import logo from './logo.svg';
import './App.css';
import React from "react"
import ReactDom from "react-dom"
import Die from "./Die"
import {nanoid } from "nanoid"




function App() {

const [allDice, setAllDice] = React.useState(allNewDice())


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
  setAllDice(allNewDice())
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
    <div className="dice-container">
      {diceElement}
      </div>
      <button
      className="roll-dice"
      onClick={generateNewDice} >
        Roll</button>
  </main>
  );
}

export default App;
