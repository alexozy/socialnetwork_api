const { Thought, User} = require("../models");

const thoughtController = {

    // GET ALL thoughts
    getAllThoughts(req,res) {
        Thought.find({})
        .then((dbData) => res.json (dbData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
    },
    // GET One thought
    getThoughtID({ params }, res) {
        Thought.findOne({ _id: params.thoughtID })
            .then((dbData) => {
                // if statement for dbData
                if (!dbData) { res.status(404).json }
                res.json(dbData);
            });

    },
},

// POST
createThought({ body, params}, res) {
    Thought.create(body)
    .then(({_id}) => {
        return User.findOneAndUpdate(
            // id
            {_id: params.userID},
            // push it
            {$push: {thoughts: _id} 
        },
            //  new thought returned
            {new: true}
        );
    })
    .then((dbData) => res.json(dbData))
    .catch((err)=> rest.status(400).json(err));
}
// PUT 

