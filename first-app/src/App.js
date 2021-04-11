import { useState } from 'react';
import './App.css';
import  NamesTable from'./NamesTable.js';


function CarTable (cars){
  return(<table>
    <th>CarName</th>    
    {cars.map(person=>
        <tr>
        <td>{cars.cname}
        </td>
        
        </tr>
       )
      }
        
       </table>)

}
const NameForm=() => {
  const [inputValue,setValue]=useState("");
  const handleChange=(event )=>{
     
    setValue(event.target.value);
   console.log({inputValue});
  }
  const handleSubmit=(event)=>{
    //event.preventDefault;
    console.log({inputValue})
  }
  return(
    <form onSubmit={handleSubmit}>
      <label>
        Name:<input type="text" value={inputValue} onChange={handleChange}/>
      </label><input type="submit" value="Submit" />
    </form>
  )
}
function App() {
  const inputs =[];
  return (
    <div className="App">
          <NameForm/>
    </div>
  );
}
export default App;

