
import './App.css';
//ex1
import upper, {text1,text2, text3} from "./file1";
//ex2
import person, {males,females} from "./file2"
import MultiWelcome from "./file3";

var firstName=person.firstName;
var email=person.email;
const ar51=[...males,females[0],females[1]];
console.log(ar51);
const ar52=[...males,"Kurt","Helle",females[0],females[1],"Tina"];
console.log(ar52);
//ex5
console.log(persons);
function App() {
  return (
    <div>
    <h2>Ex 1</h2>
    <p>{text1}</p>
    <p>{text2}</p>
    <p>{text3}</p>
    <p>{upper("please uppercase me")}</p>
    
    <h2>Ex 2</h2>
    <p>Firstname: {firstName}</p>
    <p>Email: {email}</p>

    <h2>Ex 3</h2>
    <MultiWelcome/>
    
    </div>
  )
}

export default App;
