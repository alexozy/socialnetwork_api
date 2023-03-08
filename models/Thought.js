const { Schema, model, Types} = require('mongoose');
const reactionSchema = require('./Reaction');

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

const ThoughtSchema = new Schema (
    {
        // thoughtText
        thoughtText:{
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        // createdAt:

        // username
        username:{
            type: String,
            required: true,
        },
        reactions: [ReactionSchema],
        // reactions | Array of nested documents created with the reactionSchema





    // Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
})



module.exports = Thought;