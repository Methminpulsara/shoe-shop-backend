const expres = require ('express');
const router = expres.Router();
const shoeController = require('../controllers/shoeController');
const { protect, adminOnly } = require("../middlewares/auth.middleware");
const asyncHandler = require('../utils/asyncHandler')

//admin Only can 
router.post('/', protect , adminOnly, asyncHandler(shoeController.create));
router.delete('/:id', protect, adminOnly, asyncHandler(shoeController.remove));
router.put('/:id', protect, adminOnly, asyncHandler(shoeController.update));

router.get('/', asyncHandler(shoeController.getAll));
router.get('/:id', asyncHandler(shoeController.getById));

module.exports= router;