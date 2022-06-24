// generates a random word for the game
import { useState, useEffect } from "react";
import Game from "./Game";
// how to show letters that were clicked on
// if letter clicked on is in the wordarray, need to show it in correct order

function Word(props) {
  const wordArr = props.word.split("");
  let listItems = wordArr.map((letter, index) => (
    <li
      className="letter"
      key={index}      value={letter}
    >
      {letter}
    </li>
  ));
// create a blank array to populate
const [blankArray, setBlankArray] =  useState([])
let blankArr = []
  for (let i = 0; i <= wordArr.length; i++) {
    blankArr.push(" ");
  }

  // console.log(wordArr);
  const wordspot = [];
  for (let i = 0; i < props.word.length; i++) {
    wordspot.push("__");
  }

    // checks the index of guessed letter
  const indices = [];
  if (props.guess) {
    let idx = wordArr.indexOf(props.guess);
    while (idx != -1) {
      indices.push(idx);
      idx = wordArr.indexOf(props.guess, idx + 1);
    }
    for(let i =0; i< indices.length; i++){
        wordArr[indices[i]] = props.guess
        // console.log(wordArr)
        blankArr.splice(indices[i],0, props.guess)
        
      
    }
    
    console.log("index of letters found:" + indices);
  }
     useEffect(() => {
       setBlankArray(blankArr);
     }, [props.guess]);
console.log(blankArray)

//   var index = items.indexOf(3452);

//   if (index !== -1) {
//     items[index] = 1010;
//   }

  return (
    <div>
      <ul className="wordlist">{listItems}</ul>
{blankArray}
      {wordspot.map((x) => (
        <div className="wordspot">{x}</div>
      ))}
      <Game wordArr={wordArr} word={props.word} guess={props.guess} />
    </div>
  );
}

export default Word;
