import Tufail  from "./Tufail"; 
import Table from "./table";
import Baba from "./Baba"
function App(){
  return(
    <div>
      <h1>My First React App</h1>
      <Tufail>This is my 1st tag</Tufail> 
      <Tufail>This is my 2nd tag</Tufail> 
      <Baba></Baba>
      <Table first={1} second={2} />
    </div>
  );
}
export default App;

