import { useState } from 'react';
import './App.css';
import Ref from "./ref";
function App (){
  const [color, setColor] = useState("black");
  return (
    <div>
      <div className='color_div' style={{ backgroundColor: color }}></div>
      <div className='all_btns'>
        <div className='indi_btn_red' onClick={() => setColor('red')}></div>
        <div className='indi_btn_green' onClick={() => setColor('green')}></div>
        <div className='indi_btn_blue' onClick={() => setColor('blue')}></div>
        <div className='indi_btn_yellow' onClick={() => setColor('yellow')}></div>
        <div className='indi_btn_brown' onClick={() => setColor('brown')}></div>
        <span></span>
        <br />
        <Ref />
      </div>
    </div>
  )
}
export default App;