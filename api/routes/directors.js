const router = require('express').Router();
const DirectorController = require('../controllers/DirectorController');

router.get('/', DirectorController.getAll);
router.post('/', DirectorController.create);
router.put('/:id', DirectorController.update);
router.delete('/:id', DirectorController.delete)
module.exports = router;