const router = require('express').Router();
const ActorController = require('../controllers/ActorController')
router.post('/', ActorController.create);

module.exports = router;