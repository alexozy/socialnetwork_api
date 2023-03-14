const {Thought, User} = require("../models");

const thoughtController = {
    // getAllThought, 
    // getThoughtById, 
    // createThought, 
    // updateThought, 
    // deleteThought, 
    // addReaction, 
    // removeReaction,

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
                    res.status(404).json ({ message: "Thought has no id"});
                    return;
                }
                res.json(dbData);
            })
            .catch((err) => {
                console.log(err);
            });

    },
    // createThought,
    createThought({ params, body }, res) {
        Thought.create(body)
          .then(({ _id }) => {
            return User.findOneAndUpdate(
              { _id: body.userId },
              { $push: { thoughts: _id } },
              { new: true }
            );
          })
          .then((dbUserData) => {
            if (!dbUserData) {
              return res
                .status(404)
                .json({ message: "New Thought! Id not assigned to user!" });
            }
    
            res.json({ message: "Yay! New Thought!" });
          })
          .catch((err) => res.json(err));
      },

       // updateThought, 
       updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, {
          new: true,
          runValidators: true,
        })
          .then((dbThoughtData) => {
            if (!dbThoughtData) {
              res.status(404).json({ message: "Thought has no id" });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch((err) => res.json(err));
      },

    // deleteThought, 
    deleteThought({ params }, res) {
      Thought.findOneAndDelete({ _id: params.thoughtId })
      .then((deletedThought) => {
        if (!deletedThought) {
          return res.status(404).json({ message: "Thought has no id" });
        }
        return User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { thoughts: params.thoughtId } },
          { new: true }
        );
      })
      .then((dbData) => {
        if (!dbData) {
          res.status(404).json({ message: "Thought has no id" });
          return;
        }
        res.json(dbData);
      })
      .catch((err) => res.json(err));
  },

    // addReaction, 
    addReaction({ params, body }, res) {
      Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $addToSet: { reactions: body } },
        { new: true, runValidators: true }
      )
        .then((dbThoughtData) => {
          if (!dbThoughtData) {
            res.status(404).json({ message: "Thought has no id" });
            return;
          }
          res.json(dbThoughtData);
        })
        .catch((err) => res.json(err));
    },
    // removeReaction,
    removeReaction({ params }, res) {
      Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $pull: { reactions: { reactionId: params.reactionId } } },
        { new: true }
      )
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => res.json(err));
    },
  };


module.exports = thoughtController;