import { useState, useRef } from "react";
import "./App.css";
import img1 from "./assets/img1.JPG";
import img2 from "./assets/img2.JPG";
import img3 from "./assets/img3.JPG";
import img4 from "./assets/img4.JPG";
import img5 from "./assets/img5.JPG";

function App() {
  const [img, setImg] = useState(1);
  const next = ()=>{
  if(img === 5){
    setImg(1);
  }
  else{ 
    setImg(img+1);
  }
  };
  const previous = ()=>{
    if(img === 1){
      setImg(5);
    }
    else{
      setImg(img-1);
    }
  }
  return (
    <div>
      <div>
        <img src={img === 1 ? img1 : img === 2 ? img2 : img === 3 ? img3 : img === 4 ? img4 : img5} alt="" className="img" />

      </div>
      <button onClick={previous}>{"Previous"}</button>
      <button onClick={next}>{"Next"}</button>

    </div>
  );
}
export default App
