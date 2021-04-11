import React, { useState,useEffect } from 'react';

function Joke (){
    const [j,setJ]=useState("chuck joke");
    const [rj,setRJ]=useState("random joke")
    useEffect(() => {
        const interval = setInterval(() => {
            fetch('https://icanhazdadjoke.com',{
    headers: {
      'Accept': 'application/json'}}).then((res)=>res.json()).then((data)=>{setRJ(data.joke)});
        }, 10000);
        return () => clearInterval(interval);
      }, []);
    return(
        <div>
            <button onClick={() => fetch('https://api.chucknorris.io/jokes/random').then((res)=>res.json()).then((data)=>{setJ(data.value)})}>
         Get Chuck Joke
      </button>
      
           
      <p>{j}</p>
       <button onClick={() => fetch('https://icanhazdadjoke.com',{
    headers: {
      'Accept': 'application/json'}}).then((res)=>res.json()).then((data)=>{setRJ(data.joke)})}>
         Get Joke
      </button>
      <p>{rj}</p>
      </div>
      
    );

}
export default Joke;