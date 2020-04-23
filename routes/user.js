const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.js');


router.post('/createUser', userCtrl.signup);
router.post('/signin', userCtrl.signin);
router.get('/', userCtrl.getAllUsers);
router.get('/:id', userCtrl.getUserById);
router.patch('/:id', userCtrl.updateUser);
router.delete('/:id', userCtrl.deleteUser);


module.exports = router;