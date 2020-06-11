const router = require('express').Router();
const MovieController = require('../controllers/MovieController.js')
router.get('/', MovieController.getAll);
router.post('/', MovieController.create);
router.put('/:id', MovieController.update)
router.delete('/:id', MovieController.delete)
module.exports = router;