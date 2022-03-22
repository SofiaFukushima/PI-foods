const {Diet, Recipes} = require('../../db.js');

const getDiets = async (req, res) => {

       const diets = await Diet.findAll()

    res.status(200).send(diets)
}

module.exports = {
    getDiets
}