const router = require('express').Router();
const DirectorController = require('../controllers/DirectorController');
router.get('/', DirectorController.getAll);

module.exports = router;