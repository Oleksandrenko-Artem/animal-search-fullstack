const { Router } = require('express');
const petsRouter = require('./petsRouter');
const petsTypesRouter = require('./petsTypesRouter');

const router = Router();

router.use('/pets', petsRouter);
router.use('/petsTypes', petsTypesRouter);

module.exports = router;