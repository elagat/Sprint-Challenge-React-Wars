import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";

function CharacterGrid() {
  const [character, setCharacter] = useState([]);

  useEffect( () => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(res => {
        console.log(res.data);
        setCharacter(res.data.results);
      })
  }, []);

  return (
    <div className="character-grid">
      {character.map(character => <CharacterCard name={character.name}
                                                 height={character.height}
                                                 mass={character.mass}
                                                 haircolor={character.hair_color} />)}
    </div>
  )
}

export default CharacterGrid;
