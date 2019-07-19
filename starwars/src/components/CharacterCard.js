import React from "react";

function CharacterCard(props) {
  return (
    <div className="character-card">
      <h2>{props.name}</h2>
    </div>
  )
};

export default CharacterCard;
