import { useState } from "react";
import Tufail from "./Tufail"; 
import Table from "./table";
import Baba from "./Baba";
import New from "./new";

function App() {
  const [b, setB] = useState(0);
  const [a, setA] = useState(0);

  const inc = () => {
    setA(prev => prev + 1);
    setB(prev => prev + 1);
  };

  const dec = () => {
    setA(prev => prev - 1);
  };

  return (
    <div>
      <h1>My First React App</h1>

      <h1>B: {b}</h1>

      <button onClick={inc}>+</button>
      <br /><br />

      <h1>A: {a}</h1>
      <button onClick={dec}>-</button>

      <hr />

      <Tufail>This is my 1st tag</Tufail>

      <Table first={1} second={2} />

      {/* Optional components */}
      {/* <Baba /> */}
      {/* <New /> */}

    </div>
  );
}

export default App;