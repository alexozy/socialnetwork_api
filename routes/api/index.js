// this will add the /users /thoughts to the https 

const router = require("express").Router();
const userRoutes = require('./user_routes');
const thoughtRoutes = require('./thought_routes)');
// https route part | we'd 
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

modules.exports = router;

