import React from "react";
import Ingredient from "../Ingredients/Ingredient";

// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return (
    <ul>
      {props.stack.map((ingredient, idx) => (
        <Ingredient
          key={idx}
          ingredient={ingredient}
          onClick={() => props.onRemove(idx)}
          button="X"
        />
      ))}
    </ul>
  );
};

export default BurgerStack;
