const router = require("express").Router();

// import your apis for the index.js routes in the api folder not the index.js
const apiRoutes = reqiure ('./api');

router.use('./api', apiRoutes);
router.use((req, res) => {
    // Error Message 
    res.status(404).send("<h1> 404 Error <h1>");
});

module.exports = router;