import React from "react";

function CharacterCard(props) {
  return (
    <div className="character-card-container">
      <h2>{props.name}</h2>
      <h3>{`Homeworld: ${props.homeworld}`}</h3>
      <img src={props.url} />
    </div>
  )
};

export default CharacterCard;
