const expres = require ('express');
const router = expres.Router();
const shoeController = require('../controllers/shoeController');
const { protect, adminOnly } = require("../middlewares/auth.middleware");
const asyncHandler = require('../utils/asyncHandler')


//admin Only can 
router.post('/', protect , adminOnly, shoeController.create);
router.delete('/:id', protect, adminOnly, shoeController.remove);
router.put('/:id', protect, adminOnly, shoeController.update);

router.get('/', shoeController.getAll);
router.get('/:id', shoeController.getById);

module.exports= router;