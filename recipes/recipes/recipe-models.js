const db = require("../data/db-config.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

//return a list of all recipes
function getRecipes() {
  return db("recipes");
}

//return a list of all ingredients and quantities for a given recipe
/*
select ri.quantity
, ri.unit
, i.ingredient_name
from recipe_ingredients as ri
join ingredients as i on ri.ingredient_id = i.id
where ri.recipe_id = id;
*/
async function getShoppingList(id) {
  return await db("recipe_ingredients as ri")
    .select("ri.quantity", "ri.unit", "i.ingredient_name")
    .join("ingredients as i", "ri.ingredient_id", "i.id")
    .where({ recipe_id: id })
    .then(ingredients => {
      if (ingredients) {
        return ingredients;
      } else {
        return null;
      }
    });
};


//return a list of step by step instructions for preparing a recipe
/*
select i.instruction
from instructions as i
where i.recipe_id = id
*/
function getInstructions(id){
db("instruction as i")
.select("i.instruction")
.where({[i.recipe_id]: id})
};
