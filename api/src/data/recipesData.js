const axios = require("axios");
const {Recipes, Diet} = require('../db.js')
const {API_KEY} = process.env

const apiRecipes = async () => {
        //bring the data from the api with an axios, this would give me an object with data:{}
        const apiInfo = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&instructionsRequired=true&number=100&apiKey=${API_KEY}`)

        //map the data to get only what i need
        const dataMap = await apiInfo.data.results.map(el => {
            return {
            id: el.id,
            name: el.title,
            summary: el.summary,
            score: el.spoonacularScore, 
            healthyScore: el.healthScore,
            steps: el.analyzedInstructions.map(as => as.steps.map(las => las.step)),
            image: el.image,
            diets: el.diets
            };
        });
        
        return dataMap
};


//Bring the data from the db
const dataDb = async () => { //gets database data.
return await Recipes.findAll({ //brings all the database information
include :{ //add the relation between recipes and diets
    model: Diet,
    attributes: ['name'], //and add this attribute in db call.
    through:{
        attributes: [],
            },
        }
    })     
}

//get all the data toghether
const allData = async () => {
        //await for all the data
    const apiDone = await apiRecipes();
    const dbDone = await dataDb();

        //concat into one p
    const totalData = apiDone.concat(dbDone);

    return totalData
};

module.exports = {
    allData,
    dataDb,
    apiRecipes,
}