const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');


router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth',authMiddleware, userController.check);

// (req, res) => {
//     res.json({message: 'user is authorized'})
// }

module.exports = router;