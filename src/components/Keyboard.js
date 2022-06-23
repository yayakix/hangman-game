function Keyboard() {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    const buttons= [];
    const handleClick = (event) => {
        console.log(event.target.value)
    }

    for (let i =0; i< alphabet.length; i++){
        buttons.push(
          <button value={alphabet[i]} onClick={(event) => handleClick(event)}>
            {alphabet[i]}
          </button>
        ); 
    }

  return (
    <div>
    {buttons}
    </div>
  );
}

export default Keyboard;
