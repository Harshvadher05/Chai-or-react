import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    console.log("clicked: ", count);
    setCount(count + 1);
  };

  const removeValue = () => {
    if (count > 0) setCount(count - 1);
    else setCount(0);
  };

  return (
    <>
      <h1>Chai cup counter</h1>
      <h2>Counter value : {count}</h2>

      <button onClick={addValue}>Add 1 more cup</button>
      <br />
      <button onClick={removeValue}> Remove 1 cup</button>
    </>
  );
}

export default App;
