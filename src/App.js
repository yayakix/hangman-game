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
      <button className="letterkey" value={alphabet[i]} onClick={(event) => handleClickKey(event)} >
        {alphabet[i]}
      </button>
    );
  }

  return (
    <div className="App">
      <button className="newgamebtn" onClick={handleClick}>New Game</button>
      <img className="image" src="https://media.istockphoto.com/photos/hangman-chalk-writing-on-old-grunge-chalkboard-background-with-space-picture-id1146252014?b=1&k=20&m=1146252014&s=612x612&w=0&h=f7OvaLMKIE9ZOCdM0jvUObPfQlH3W5azdZsrNJijEyk=" />
      <div className="characters">{buttons}</div>
      <Word word={word} guess={guess} getWord={getWord} />
    </div>
  );
}

export default App;
