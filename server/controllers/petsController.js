const { Pet } = require("../models");

module.exports.getPets = async (req, res, next) => { 
    try {
        const { petTypeId } = req.query;
        const query = petTypeId ? { petTypeId: parseInt(petTypeId) } : {};
        const foundPets = await Pet.findAll({ where: query });
        res.status(200).send({ data: foundPets });
    } catch (error) {
        next(error);
    }
};
module.exports.createPet = async (req, res, next) => { 
    const { body } = req;
    try {
        const createdPet = await Pet.create(body);
        res.status(201).send({ data: createdPet });
    } catch (error) {
        next(error);
    }
};
module.exports.deletePetById = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Pet.destroy({ where: { id } });
        res.status(200).send({ message: "Pet deleted successfully" });
    } catch (error) {
        next(error);
    }
 };