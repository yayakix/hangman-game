import { useState, useEffect } from "react";

// check to see if clicked button matches a letter in the chosen word
function Hungman(props) {
    const [man, setMan] = useState(null)
    const manPieces = ["O","|", "/","/"]
    // const mandisplay = 
    // for (let i = 0 ; i < man; i++){

    // }
    useEffect(() => {
        setMan(10 - props.lives);
      }, [props.lives]);
  return (
    <div>
    man has this many pieces:
    {man}
    </div>
  );
}

export default Hungman;
