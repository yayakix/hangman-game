import { useState, useEffect } from "react";
import Game from "./Game";
// how to show letters that were clicked on
// if letter clicked on is in the wordarray, need to show it in correct order

function Word(props) {
  const wordArr = props.word.split("");
  let listItems = wordArr.map((letter, index) => (
    <li className="letter" key={index} value={letter}>
      {letter}
    </li>
  ));
  // create a blank array to populate
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
      // console.log(props.guess);
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
      // console.log(indexes)
    },
    [props.guess]
  );

  return (
    <div>
      <ul className="wordlist">{listItems}</ul>
      {blankArray}
      {/* {wordspot.map((x) => (
        <div className="wordspot">{x}</div>
      ))} */}
      <Game wordArr={wordArr} word={props.word} guess={props.guess} />
    </div>
  );
}

export default Word;
