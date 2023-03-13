
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
const { getAllUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser, 
    addFriend, 
    removeFriend,
} = require('../../controllers/usercontroller');

// api/users
router
.route('/')
.get(getAllUser)
.post(createUser)

// api/users/:id
router
.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// api/users/:userId/friend/friendId
router
.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;








