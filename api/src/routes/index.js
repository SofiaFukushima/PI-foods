const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {getNameRecipes} = require('./recipes/getNameRecipes');
const {getIdRecipes} = require('./recipes/getIdRecipes');
const {postRecipes} = require('./recipes/postRecipes');
const {getDiets} = require('./diets/getDiets');

const router = Router();

//get the id's
router.use('/recipes/:idReceta' , getIdRecipes);
//all the recipes and the name query
router.use('/recipes' , getNameRecipes);
//get the diets
router.use('/types' , getDiets);
//post recipes
router.post('/recipe', postRecipes);

module.exports = router;
