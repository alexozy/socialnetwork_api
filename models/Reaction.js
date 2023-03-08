// you'll need a const for Schema and then something to put a timestamp

const {Schema, Types} = require ('mongoose');

const ReactionSchema = new Schema({
   
    // objectID data type for Mongoose
    reactionId: {
        type: Schema.Types.ObjectId,
        // you'll want to set a new default value here
        default: () =>new Types.ObjectId(),
    },
    // reactionBody:
    // username
    // createdAt
    
})

module.exports = ReactionSchema;