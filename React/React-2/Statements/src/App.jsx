import { useState } from 'react';
import './App.css';
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
      </div>
    </div>
  )
}
export default App;