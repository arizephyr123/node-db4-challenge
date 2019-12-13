/*
const db = require('./data/db-config.js');
const router = express.Router();


//get all recipes
router.get('/api/recipes', (req, res) => {
    // get all species from the database
    return db('recipes')
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

//   getShoppingList(recipe_id): should return a list of all ingredients and quantities for a given recipe
// getInstructions(recipe_id): should return a list of step by step instructions for preparing a recipe


module.exports = router;
*/