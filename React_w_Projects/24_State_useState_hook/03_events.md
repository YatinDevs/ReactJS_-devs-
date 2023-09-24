# Events :

- Click
- mouseOver
- mouseout
- keyDown
- keyUp
- keyPress

- Click Event Function :
- return <button onClick={() => console.log("play")}>Play</button>;

- Click Event Handler function :

  function handleClick() {
  console.log("play");
  }

- We just declare function inside onClick and not call the function :
  return <button onClick={handleClick}>Play</button>;

- Childern Props

- Synthetic Event Object
- preventDefault()
- stopPropogation()
