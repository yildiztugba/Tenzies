import logo from './logo.svg';
import './App.css';
import React from "react"
import ReactDom from "react-dom"
import Die from "./Die"

function allNewDice(){
    const newDice=[];
    for(let i=0; i<10; i++){
        newDice.push(Math.round(Math.random(6)*6))
    }
    return newDice
}


function App() {

  return (
   <main>
      
    <div className="dice-container">
                <Die value="1" />
                <Die value="2" />
                <Die value="3" />
                <Die value="4" />
                <Die value="5" />
                <Die value="6" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
            </div>
   </main>
  );
}

export default App;
