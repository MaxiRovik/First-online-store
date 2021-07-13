const Router = require('express');

const router = new Router();
const basketController = require('../controllers/basketController');

router.post('/', basketController.createBasket);
router.post('/:id', basketController.addDeviceToBasket);
router.get('/', basketController.getAll);


module.exports = router;