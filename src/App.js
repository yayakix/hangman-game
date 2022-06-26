import { useState } from "react";
import "./App.css";
import Word from "./components/Word";

function App() {
  const [word, setWord] = useState("");
  const [guess, setGuess] = useState('')

  const getWord = async () => {
    const response = await fetch("https://random-word-api.herokuapp.com/word");
    const data = await response.json();
    setWord(data[0]);
    // console.log(data[0]);
  };
  const handleClick = () => {
    getWord();
  };

  // keyboard section to input a guess
  const alphabet = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
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
      <div className="characters">{buttons}</div>
      <Word word={word} guess={guess} />
    </div>
  );
}

export default App;
