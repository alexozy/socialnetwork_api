const {Thought, User} = require("../models");

const thoughtController = {

    // GET ALL thoughts
    getAllThought(req,res) {
        Thought.find({})
        .then((dbData) => res.json (dbData))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
    },
    // GET One thought
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.thoughtID })
            .then((dbData) => {
                // if statement for dbData when no thought ID is found
                if (!dbData) { 
                    res.status(404).json ({ message: "No thought assigned to this ID"});
                    return;
                }
                res.json(dbData);
            })
            .catch((err) => {
                console.log(err);
            });

    },
}
