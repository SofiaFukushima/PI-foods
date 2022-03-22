
const {allData} = require('../../data/recipesData.js')

//brings the get and search with the name
const getNameRecipes = async (req, res) => {
        //request the name from the query
        let {name} = req.query;
        //await all the data to bring it
        let recipesData = await allData();
        //if there's a name search for coincideses
        if(name){
            let nameRecipes = name.toLowerCase()
            let recipes = await recipesData.filter(e => e.name.toLowerCase().includes(nameRecipes))
            recipes.length?
            res.status(200).send(recipes) : res.status(404).send(`😢 We can't find ${name}, please try again 😢`)
        } else {res.status(200).send(recipesData)}
}
/* 
const getNameRecipes= async(req, res) => {
    let {name} = req.query;

    if(name){
    let recipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&addRecipeInformation=true&number=100&apiKey=${API_KEY}`);:

    const dataMap = await recipes.data.map(el => {
            return {
            id: el.id,
            name: el.title,
            summary: el.summary,
            score: el.spoonacularScore, 
            healthyScore: el.healthScore,
            steps: el.analyzedInstructions[0].map(as => as.steps.map(las => las.step)),
            image: el.image,
            };
        });
        datamap.length?
        res.status(200).send(dataMap) : res.status(404).send(`😢 We can't find ${name}, please try again 😢`)  
    } else {res.status(404).send(`😢 No name 😢`)}
}
*/



module.exports = {
    getNameRecipes
}