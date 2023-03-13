const {Thought, User} = require("../models");

const thoughtController = {
    // GET ALL
    getAllThoughts(req, res){
        Thought.find({})
        .then((dbData) => res.json(dbData))
        .catch(err=>{
            console.log(err)
        })
    }
}