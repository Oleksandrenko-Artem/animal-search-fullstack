const { Router } = require('express');
const { getPetsTypes } = require('../controllers/petsTypesController');

const petsTypesRouter = Router();

petsTypesRouter.get('/', getPetsTypes);

module.exports = petsTypesRouter;