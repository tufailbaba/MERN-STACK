import { useRef } from 'react';
function App(){
    let h = useRef(null);
    return (
        <div>
            <h1 ref={h}>Hello World</h1>
            <button onClick={() => h.current.style.color = "red"}>Red</button>
            <button onClick={() => h.current.style.color = "green"}>Green</button>
            <button onClick={() => h.current.style.color = "blue"}>Blue</button>
        </div>
    )
}
export default App;