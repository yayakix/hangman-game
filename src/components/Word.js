// generates a random word for the game
import Game from "./Game";

function Word(props) {
    // array of selected word
    const wordArr = props.word.split('')
    const listItems = wordArr.map((letter, index) => (
      <li
        className="letter"
        key={index}
        onClick={(event) => handleClick(event)}>
        {letter}
      </li>
    ));

    console.log(wordArr)
    // const wordspot = []
    for (let i = 0; i < props.word.length; i++){
        console.log('space for word')
    }
     const handleClick = (event) => {
       console.log(event.target.textContent);
       
     };

  return (
    <div>
      <ul className="wordlist">{listItems}</ul>
      <Game wordArr={wordArr} word={props.word} guess={props.guess} />
    </div>
  );
}

export default Word;
