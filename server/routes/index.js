const { Router } = require('express');
const petsRouter = require('./petsRouter');
const petsTypesRouter = require('./petsTypesRouter');

const router = Router();

router.use('/pets', petsRouter);
router.use('/petTypes', petsTypesRouter);

module.exports = router;