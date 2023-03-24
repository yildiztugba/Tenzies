import logo from './logo.svg';
import './App.css';
import React from "react"
import ReactDom from "react-dom"
import Die from "./Die"





function App() {

const [allDice, setAllDice] = React.useState(allNewDice())


function allNewDice(){
    const newDice=[];
    for(let i=0; i<10; i++){
        newDice.push(Math.round(Math.random(6)*6))
    }
    return newDice
}

function generateNewDice(){
  setAllDice(allNewDice())
}


const diceElement = allDice.map(dice=>{
          return <Die value={dice} />})

  return (
  <main>
    <div className="dice-container">
      {diceElement}
      </div>
      <button
      onClick={generateNewDice} >
        Roll</button>
  </main>
  );
}

export default App;
