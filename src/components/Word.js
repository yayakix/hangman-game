
function Word(props) {
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
    const wordspot = []
    for (let i = 0; i < props.word.length; i++){
        console.log('space for word')
    }
     const handleClick = (event) => {
       console.log(event.target.textContent);
       
     };

  return (
    <div>
      <ul className="wordlist">{listItems}</ul>
    </div>
  );
}

export default Word;
