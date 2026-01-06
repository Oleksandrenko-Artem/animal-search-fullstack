const { Pet } = require("../models");

module.exports.getPets = async (req, res, next) => { 
    try {
        const foundPets = await Pet.findAll();
        res.status(200).send({ data: foundPets });
    } catch (error) {
        next(error);
    }
};
module.exports.getPetById = async (req, res, next) => { };
module.exports.createPet = async (req, res, next) => { 
    const { body } = req;
    try {
        const createdPet = await Pet.create(body);
        res.status(201).send({ data: createdPet });
    } catch (error) {
        next(error);
    }
};
module.exports.updatePetById = async (req, res, next) => { };
module.exports.deletePetById = async (req, res, next) => { };