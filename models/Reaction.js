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

module.exports = ReactionSchema;