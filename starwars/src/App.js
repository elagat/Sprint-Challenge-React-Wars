// import React, { useEffect, useState } from 'react';
// import axios from "axios";
import React from "react";
import CharacterGrid from "./components/CharacterGrid.js";

import './App.scss';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // const [character, setCharacter] = useState([]);
  // const [number, setNumber] = useState("1");

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // useEffect( () => {
  //   axios
  //     .get(`https://swapi.co/api/people/?page=${number}`)
  //     .then(res => {
  //       console.log(res.data);
  //       setCharacter(res.data.results);
  //       setNumber(res.data.results.)
  //     })
  // }, [number]);
  //
  // console.log("number", number);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterGrid />
    </div>
  );
}

export default App;
