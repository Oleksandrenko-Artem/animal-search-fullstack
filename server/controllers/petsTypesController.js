const { PetType } = require('./../models');
module.exports.getPetsTypes = async (req, res, next) => { 
    try {
        const getTypes = await PetType.findAll({ raw: true, attributes: { exclude: ['createdAt', 'updatedAt'] } });
        res.status(200).send({ data: getTypes });
    } catch (error) {
        next(error);
    }
};