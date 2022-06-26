import { useEffect, useState } from "react";
import Hungman from "./Hungman";

function Game(props) {
  const [lives, setLives] = useState(10);
  useEffect(() => {
    if (props.guess) {
      if (props.wordArr.includes(props.guess)) {
        console.log("letter is in word");

      } else {
        setLives(lives - 1);
      }
    }
  }, [props.guess]);

    useEffect(() => {
    setLives(10)
    }, [props.word]);
  

  return <div>Lives left: {lives}
  <Hungman lives={lives}/>
  </div>;
}

export default Game;
