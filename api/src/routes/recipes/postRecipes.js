const {Recipes, Diet} = require('../../db.js');

const postRecipes = async (req, res) => {

    const {  // all the information that the user give us.
        name,
        summary,
        score,
        healthyScore,
        steps,
        image,
        diets
    } = req.body

    let createFud = await Recipes.create({ //we create the recipe in the database
        name,
        summary,
        score,
        healthyScore,
        steps,
        image,
    })

    let dietDb = await Diet.findAll({ // we search in Diet db the diets that match with the ones of the activity
        where: {name: diets} 
    })

    createFud.addDiet(dietDb) // we make the relation if recipes and diets
    // add is a sequelize method that brings on the table what i send. 
    res.status(200).send("New recipe created!") 
}

module.exports = {
    postRecipes
}