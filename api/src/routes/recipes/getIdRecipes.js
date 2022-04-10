
const {allData} = require('../../data/recipesData.js')

//brings the id's from the api
const getIdRecipes = async (req, res) => {

    //request the name from the query
    let {idReceta} = req.params;
    console.log(idReceta)
    //await all the data to bring it
    let recipesData = await allData();
    //if there's a name search for coincideses

    if(idReceta){
        let idRecipes = idReceta.toString().toLowerCase()
        console.log(idRecipes)

        let recipe = await recipesData.filter(e => e.id.toString().toLowerCase().includes(idRecipes))
        console.log(recipe)

        if(recipe.length>0){
            
        res.status(200).send(recipe)
    } else {
         res.status(404).send(`😢 We can't find ${idReceta}, please try again 😢`)}
    } else {res.status(404).send("Not ID")}
}


     /*  let {idReceta} = req.params;

     const idReceta = 716426
    if(idReceta){
    let {data} = await axios.get(`https://api.spoonacular.com/recipes/${idReceta}/information?includeNutrition=true&apiKey=${API_KEY}`);

    
    const dataMap = await [data].map(el => {
            return {
            id: el.id,
            name: el.title,
            summary: el.summary,
            score: el.spoonacularScore, 
            healthyScore: el.healthScore,
            steps: el.analyzedInstructions[0].map(as => as.steps.map(las => las.step)),
            image: el.image,
            diets:el.diets
            };
        });

        console.log(dataMap)
        if(dataMap){res.status(200).send(dataMap)}
        else{
            res.status(404).send(`😢 We can't find ${idReceta}, please try again 😢`)  
        }
    } else {res.status(404).send(`😢 No id 😢`)} */

module.exports = {
    getIdRecipes
}