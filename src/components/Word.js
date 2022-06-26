import { useState, useEffect } from "react";
import Game from "./Game";

function Word(props) {
  const wordArr = props.word.split("");
  let listItems = wordArr.map((letter, index) => (
    <li className="letter" key={index} value={letter}>
      {letter}
    </li>
  ));
  // create a blank array to populate
  const [prevGuesses, setPrevGuesses] = useState([])
  
    useEffect(() => {
      if (!prevGuesses.includes(props.guess)){
setPrevGuesses((prevState) => {
  return [...prevState, ` ${props.guess},`];
});
      }
    }, [props.guess]);
      useEffect(() => {
      setPrevGuesses([])
      }, [props.word]);
  const [blankArray, setBlankArray] = useState([]);

  useEffect(() => {
    setBlankArray([]);
    for (let i = 0; i < wordArr.length; i++) {
      setBlankArray((prevState) => {
        return [...prevState, " _ "];
      });
    }
  }, [props.word]);

  useEffect(
    () => {
      const indexes = []
      wordArr.forEach((element, index) => {
        // get index of current guess
        if( element === props.guess){
          indexes.push(index)
        }
      });
      let blankArrayCopy = [...blankArray]
      indexes.forEach((index) => {
        blankArrayCopy[index] = props.guess
      })
      setBlankArray(blankArrayCopy)
    },
    [props.guess]
  );

  return (
    <div>
      <ul className="wordlist">Hint: {listItems}</ul>
      <div className="blankarray">{blankArray}</div>
      <br />
      prev guesses:
      {prevGuesses}

      <Game
        wordArr={wordArr}
        word={props.word}
        guess={props.guess}
        getWord={props.getWord}
      />
    </div>
  );
}

export default Word;
