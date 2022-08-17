import React from "react";

function RecipeView({ recipe, deleteRecipe }) {
  const { name, cuisine, photo, ingredients, preparation } = recipe;
  return (
    <tr className="recipe">
      <th>{name}</th>
      <th>{cuisine}</th>
      <th>
        <img src={photo} alt="recipe"></img>
      </th>
      <th>{ingredients}</th>
      <th>{preparation}</th>
      <td>
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  );
}
export default RecipeView;
