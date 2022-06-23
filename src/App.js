import { useState } from 'react';
import './App.css';
import Word from './components/Word';
import Keyboard from './components/Keyboard';

function App() {
  const [word, setWord] = useState("")

    const getWord = async () => {
      const response = await fetch("https://random-word-api.herokuapp.com/word");
      const data = await response.json();
      setWord(data[0])
      console.log(data[0])
    };
  const  handleClick = () => {
    // call api to get a word
    // pass word to game component
    console.log('cliecked')
    getWord()
  }
  return (
    <div className="App">
    <button onClick={handleClick}>New Game</button>
    <Word word={word} />
    <Keyboard/>

    
    </div>
  );
}

export default App;
