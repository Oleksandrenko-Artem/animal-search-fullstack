const { Router } = require('express');
const { petsController } = require('../controllers');
const { validate } = require('../middlewares');


const petsRouter = Router();

petsRouter.get('/', petsController.getPets);
petsRouter.post('/', validate.validatePetOnCreate, petsController.createPet);
petsRouter.delete('/:id', petsController.deletePetById);

module.exports = petsRouter;