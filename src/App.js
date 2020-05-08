import React,{useEffect, useState} from 'react';
import Recipe from './Recipes';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {

  const APP_ID = "da1d138d";
  const APP_KEY = "b69f723ba17856a2590c10e8cf4fbcc9";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('');


  useEffect(() =>{
    getRecipes();
  }, [query]);

  const getRecipes =  async () => {
    const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return(
    <div className="App">
        <div className="card text-center" id="myHeader">
          <h2>Food Adda</h2>
        </div>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">submit</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        Calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
