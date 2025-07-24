import React from "react";
import Ingredient from "../Ingredients/Ingredient";

// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, idx) => (
        <Ingredient
          key={idx}
          ingredient={ingredient}
          onClick={() => props.onAdd(ingredient)}
          button="+"
        />
      ))}
    </ul>
  );
};

export default IngredientList;
