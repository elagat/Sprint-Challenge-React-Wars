import React from "react";
import { Card } from "semantic-ui-react";

function CharacterCard(props) {
  return (
    <Card className="character-card">
      <h2>{props.name}</h2>
      <p>Height: {props.height}</p>
      <p>Mass: {props.mass}</p>
      <p>Hair Color: {props.haircolor}</p>
    </Card>
  )
};

export default CharacterCard;
