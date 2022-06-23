// generates a random word for the game
import Game from "./Game";
// how to show letters that were clicked on

function Word(props) {
  const wordArr = props.word.split("");
  let listItems = wordArr.map((letter, index) => (
    <li
      className="letter"
      key={index}
      onClick={(event) => handleClick(event)}
      value={letter}
    >
      {letter}
    </li>
  ));

  console.log(wordArr);
  const wordspot = [];
  for (let i = 0; i < props.word.length; i++) {
    wordspot.push("__");
  }
  const handleClick = (event) => {
    console.log(event.target.textContent);
    event.target.className = "show";
  };

  const found = wordArr.find((letter) => letter === props.guess);

  return (
    <div>
      <ul className="wordlist">{listItems}</ul>
      {wordspot.map((x) => (
        <div className="wordspot">{x}</div>
      ))}
      <Game wordArr={wordArr} word={props.word} guess={props.guess} />
    </div>
  );
}

export default Word;
