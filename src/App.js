import { useState } from "react";
import "./App.css";
import Word from "./components/Word";
import Hungman from "./components/Hungman";
import Game from "./components/Game";

function App() {
  const [word, setWord] = useState("");
  const [guess, setGuess] = useState('')

  const getWord = async () => {
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await response.json();
    setWord(data[0]);
    console.log(data[0]);
  };
  const handleClick = () => {
    // call api to get a word
    // pass word to game component
    // console.log("cliecked");
    getWord();
  };

  // keyboard section to input a guess
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const buttons = [];
  const handleClickKey = (event) => {
    setGuess(event.target.value);
  };

  for (let i = 0; i < alphabet.length; i++) {
    buttons.push(
      <button value={alphabet[i]} onClick={(event) => handleClickKey(event)} >
        {alphabet[i]}
      </button>
    );
  }

  return (
    <div className="App">
      <button onClick={handleClick}>New Game</button>
      <Word word={word} guess={guess}/>
      {buttons}      
    </div>
  );
}

export default App;
