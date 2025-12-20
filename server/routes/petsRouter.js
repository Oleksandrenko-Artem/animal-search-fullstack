const { Router } = require('express');
const { petsController } = require('../controllers');


const petsRouter = Router();

petsRouter.get('/', petsController.getPets);
petsRouter.get('/:id', petsController.getPetById);
petsRouter.post('/', petsController.createPets);
petsRouter.patch('/:id', petsController.updatePetById);
petsRouter.delete('/:id', petsController.deletePetById);

module.exports = petsRouter;