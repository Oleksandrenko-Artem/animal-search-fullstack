const { createPetSchema } = require("../validators/pet.validator")

module.exports.validatePetOnCreate = async (req, res, next) => {
    const { body } = req;
    try {
        req.body = await createPetSchema.validate(body);
        next();
    } catch (error) {
        next(error);
    }
};