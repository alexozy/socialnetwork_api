// need username; email; thought array; friend array
const {Schema, model, Types} = require('mongoose');
const UserSchema = new Schema ({

    // username
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    // email
    email:{
        type: String,
        unique: true,
        required: true,
        // mongoose matching should go here /.+\@.+\..+/
        match: /.+\@.+\..+/,
    },
    thoughts: [],
    friends:[]
},
{ 
    toJSON: {
        virtuals: true,
    },

}
);
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function(){
    return this.friends.length;
})

const User = model('User', UserSchema);

module.exports = User;