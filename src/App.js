import logo from './logo.svg';
import './App.css';
import React from "react"
import ReactDom from "react-dom"
import Die from "./Die"
import {nanoid } from "nanoid"




function App() {

const [allDice, setAllDice] = React.useState(allNewDice())
const [tenzies, setTenzies] = React.useState(false)

React.useEffect(()=>{
  console.log("tugba")

},[allDice])
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
    <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
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
