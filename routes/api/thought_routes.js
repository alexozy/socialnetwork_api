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

const router = require("express". Router);
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
.post(createThought)

// api/thoughts/:id
router
.route("/:id")
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

// api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions")
.post(addReaction);

// reactionsId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;








