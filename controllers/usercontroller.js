const { User, Thought } = require("../models");

// getAllUser, 
// getUserById, 
// createUser, 
// updateUser, 
// deleteUser, 
// addFriend, 
// removeFriend,

const userController ={
// GET AllUser, 
getAllUser(req,res){
    User.find({})
    .then((dbData)=>res.json (dbData))
    .catch((err)=> {
        console.log(err);
        res.status(400).json(err);
    });
},

// GET UserById, 
getUserById({ params}, res){
    User.findOne({_id: params.id})
    .then((dbData)=>{
        if(!dbData){
            return res
            .status(404)
            .json({message: "Id not assigned to user"});
        }
        res.json(dbData);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
},

// POST createUser, 
createUser({body}, res){
    User.create(body)
    .then((dbData)=> res.json(dbData))
    .catch((err) => res.status(500).json(err));
},

// PUT updateUser, | needs to be by ID
updateUser({params, body}, res){
    User.findOneAndUpdate({_id: params.id}, body, {
      new: true,
    //   validation set to run on all updates this is important!!
      runValidators: true,  
    })
    .then((dbData) => {
        if(!dbData){
            res.status(404).json({message: "User not assigned to this Id"});
            return;
        }
        res.json(dbData);
    })
    .catch((err)=> res.json(err));

},

// DELETE deleteUser, 
deleteUser({ params}, res){
    User.findOneAndDelete({_id: params.id})
    .then((dbData)=> {
        if(!dbData){
            res.status(404).json({message: "User not assigned to this Id"});
            return;
        }
        res.json(dbData);
    })
    .catch((err)=> res.status(400).json(err));
},

// POST addFriend, 
// the purpose here: in your user's list of friends, you add a new friend!
addFriend({params}, res){
    User.findOneAndUpdate(
        {_id: params.userId},
        {$push: {friends: params.friendId}},
        // runValidator
        {new: true, runValidators: true}
    )
    .then ((dbData)=> {
        if(!dbData){
            res.status(400).json({message: "User not assigned to this Id"});
            return;
        }
        res.json(dbData);
    })
    .catch((err)=> res.json(err));
},

// removeFriend,
// same as above, this will remove the friends by Id from our user's friend list
removeFriend({params}, res){
    User.findOneAndUpdate(
        {_id: params.userId},
        {$pull: {friends: params.friendId}},
        // runValidator
        {new: true, runValidators: true}
    )
    .then ((dbData)=> {
        if(!dbData){
            res.status(400).json({message: "User not assigned to this Id"});
            return;
        }
        res.json(dbData);
    })
    .catch((err)=> res.json(err));
},

};

module.exports = userController;