const { Schema, model, Types} = require('mongoose');
// we need access to the date file require it below
const dateFormat = require("../utils/dateFormat");

// REACTION GOES HERE 
const ReactionSchema = new Schema(
{
   
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
    },
    // createdAt
    // this is wehere we'll use the dateFormat
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
},
{
  toJSON: {
    // virtuals?
    getters: true,
  },
},
);

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
        createdAt: {
            type: Date,
            default: Date.now,
            // getter method formats timestamp on query
            get: (timestamp) => dateFormat(timestamp),
          },
        // username
        username:{
            type: String,
            required: true,
        },
        reactions: [ReactionSchema],
      },
      {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
      }
);

    // Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
    ThoughtSchema.virtual("reactionCount").get(function () {
        return this.reactions.length;
});

// Thought Model
const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;