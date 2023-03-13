// Set up GET all and POST at /api/users router
// .route('/') 
// .get() 
// .post();

// Set up GET one, PUT, and DELETE at /api/users/:id router
// .route('/:id') 
// .get()
// .put() 
// .delete();
// module.exports = router;

const router = require("express").Router();
// IMPORT
const { getAllThought, 
    getThoughtById, 
    createThought, 
    updateThought, 
    deleteThought, 
    addReaction, 
    removeReaction,
} = require('../../controllers/thought-controller');

// api/thoughts
router
.route('/')
.get(getAllThought)


// api/thoughts/:id
router
.route("/:userId")
.post(createThought)

// specific thought  /:thoughtId
router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)

// 
router
.route('/userId/:thoughtId')
.delete(deleteThought);

// api/thoughts/:thoughtId/reaction
router.route("/:thoughtId/reaction")
.post(addReaction);

// reactionId
router.route("/:thoughtId/reaction/:reactionId").delete(removeReaction);

module.exports = router;








