import React from 'react';
import {persons} from "./file2";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
   function WelcomePerson(props) {
    return (
      <div>
        <h1>Hello, {props.person.firstName} {props.person.lastName} ({props.person.email}) </h1>
      </div>
    );
  }
  function MultiWelcome() {
   console.log(persons)
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        <WelcomePerson person={persons[1]}  />
        {persons.map((p)=><WelcomePerson person={p}/>)}

         </div>
    );
  }

 
export default MultiWelcome;  