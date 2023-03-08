const { Schema, model, Types} = require('mongoose');
const reactionSchema = require('./Reaction');

const ThoughtSchema = new Schema (
    {
        // thoughtText
        // createdAt:
        // username
        // reactions




    // Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
})

// REACTION GOES HERE 

const ReactionSchema = new Schema({
   
    // objectID data type for Mongoose
    reactionId: {
        type: Schema.Types.ObjectId,
        // you'll want to set a new default value here
        default: () =>new Types.ObjectId(),
    },
    // reactionBody:
    reactionBody:{
        type: String,
        required: true,
        // you can utilitze maxlength or validate here for the 280 character
        maxLength: 280,
    },
    // username
    username:{
        type: String,
        required: true,
    }
    // createdAt
    
})

module.exports = Thought;