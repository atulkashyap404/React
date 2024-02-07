import { useState } from "react";
import "./App.css";

function App() {
  // hooks implementation  ------->
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    // calling hooks  ------->
    if(counter < 20){
      // setCounter(counter + 1);

      // interview question ask this question and tell you the output: and you tel 19 but but 19 is not correct becasue the react is updatin the value by sending the material in batch so here the same work is repeat again and again. same value is updating.

      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);

      // Solution is to take the previous counter and the pass in arrow function.
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);
      setCounter(prevCounter => prevCounter + 1);



    }
    
  };

  const removeValue = () => {
    // calling hooks  ------->
    if(counter > 0){
      setCounter(counter - 1);
    }
    
  };

  return (
    <>
      <h1>chai or code</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Decrease value</button>
    </>
  );
}

export default App;
