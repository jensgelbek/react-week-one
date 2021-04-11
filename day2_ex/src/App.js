
import './App.css';
import Count from "./file1"
import Joke from "./file2"
import ListDemo from "./ListDemo"

function App() {
  const step=1;
  const oldvalue=localStorage.getItem("count")-0;
  return (
    <div className="App">
      <Count initValue={oldvalue} step={step}/>
      <Joke />
      <ListDemo />
    </div>
  );
}

export default App;
