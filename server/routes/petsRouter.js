const { Router } = require('express');
const { petsController } = require('../controllers');
const { validate } = require('../middlewares');


const petsRouter = Router();

petsRouter.get('/', petsController.getPets);
petsRouter.get('/:id', petsController.getPetById);
petsRouter.post('/', validate.validatePetOnCreate, petsController.createPet);
petsRouter.patch('/:id', petsController.updatePetById);
petsRouter.delete('/:id', petsController.deletePetById);

module.exports = petsRouter;