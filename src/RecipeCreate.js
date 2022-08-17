import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const INITIAL_STATE = {
    name: "Name",
    cuisine: "Cuisine",
    photo: "URL",
    ingredients: "Ingredients",
    preparation: "Preparation",
  };
  const [recipeFormData, setRecipeFormData] = useState(INITIAL_STATE);

  const handleRecipeFormDataChange = (event) =>
    setRecipeFormData({
      ...recipeFormData,
      [event.target.name]: event.target.value,
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(recipeFormData);
    setRecipeFormData(INITIAL_STATE);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} name="create">
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  name="name"
                  required={true}
                  value={recipeFormData.name}
                  onChange={(event) => handleRecipeFormDataChange(event)}
                ></input>
              </td>

              <td>
                <input
                  type="text"
                  name="cuisine"
                  required={true}
                  value={recipeFormData.cuisine}
                  onChange={(event) => handleRecipeFormDataChange(event)}
                ></input>
              </td>

              <td>
                <input
                  type="text"
                  name="photo"
                  required={true}
                  value={recipeFormData.photo}
                  onChange={(event) => handleRecipeFormDataChange(event)}
                ></input>
              </td>
              <td>
                <textarea
                  id="ingredients"
                  name="ingredients"
                  required={true}
                  rows={2}
                  value={recipeFormData.ingredients}
                  onChange={(event) => handleRecipeFormDataChange(event)}
                ></textarea>
              </td>
              <td>
                <textarea
                  id="preparation"
                  name="preparation"
                  required={true}
                  rows={2}
                  value={recipeFormData.preparation}
                  onChange={(event) => handleRecipeFormDataChange(event)}
                ></textarea>
              </td>

              <td>
                <button type="submit">Create</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default RecipeCreate;
