import React from "react";

const Ingredient = (props) => {
  return (
    <li style={{ backgroundColor: props.ingredient.color }}>
      {props.ingredient.name}
      {props.ingredient.color}
      <button onClick={props.onClick}>{props.button}</button>
    </li>
  );
};

export default Ingredient;
