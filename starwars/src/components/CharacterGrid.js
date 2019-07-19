import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";

function CharacterGrid() {
  const [character, setCharacter] = useState([]);
  const [number, setNumber] = useState("1");

  useEffect( () => {
    axios
      .get(`https://swapi.co/api/people/?page=${number}`)
      .then(res => {
        console.log(res.data);
        setCharacter(res.data.results);
        setNumber(res.data.results)
      })
  }, [number]);

  console.log("number", number);

  return (
    <div className="character-grid">
      <button onClick={() => setNumber(number)}>Next 10 Characters</button>
      {character.map(character => <CharacterCard name={character.name} />)}
    </div>
  )
}

export default CharacterGrid;
