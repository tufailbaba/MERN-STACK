import{ useState } from "react";
function App() {
  const [a, setA] = useState(55);
  return (
    <div>
      <>
        {a>5?<div className="green"></div>:<div className="red"></div>}
        <button onClick={()=>
          {setA(3)}}>3</button>
        <button onClick={()=>
          {setA(10)}}>10</button>
      </>

    </div>
  )
}
export default App;
