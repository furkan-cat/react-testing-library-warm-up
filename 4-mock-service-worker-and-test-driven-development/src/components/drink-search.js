import { useState } from "react";
import fetchDrinks from "../api/fetchDrinks";

const DrinkSearch = () => {
  const [drinks, setDrinks] = useState([]);
  const [drinkQuery, setDrinkQuery] = useState("");
  const [error, setError] = useState(false);

  const handleDrinkQuery = async (e) => {
    e.preventDefault();
    if (drinkQuery) {
      try {
        const data = await fetchDrinks(drinkQuery);

        setDrinks(data);
      } catch (error) {
        setError(error);
      }
    }

    setDrinkQuery("");
  };

  const drinkResults = () => {
    const ingredientList = (drink) => {
      const ingredients = [];
      const maxIngredients = 15;
      for (let i = 1; i <= maxIngredients; i++) {
        const ingredient = drink["strIngredient" + i];
        if (ingredient) {
          ingredients.push(ingredient);
        }
      }
      return ingredients;
    };

    return drinks.map((drink) => {
      return (
        <div key={drink.idDrink} style={{ width: "20rem" }}>
          <img src={drink.strDrinkThumb} alt={drink.strDrink} />
          <div>
            <h5>{drink.strDrink}</h5>
            <h6>Ingredients</h6>
            <div>
              {ingredientList(drink).map((ingredient, index) => (
                <div className="p-1" key={ingredient + index}>
                  {ingredient}
                </div>
              ))}
            </div>
            <h6>Instructions</h6>
            <p>{drink.strInstructions}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <form onSubmit={handleDrinkQuery}>
        <input
          placeholder="search for a drink..."
          type="search"
          value={drinkQuery}
          onChange={(event) => setDrinkQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {drinks && <div>{drinkResults()}</div>}
      {!drinks && <h5>🍹 No drinks found 🍹</h5>}
      {error && <h5>🛑 Service unavailable 🛑</h5>}
    </div>
  );
};

export default DrinkSearch;
