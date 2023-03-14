const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/socialnetwork_api",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
// executed mongo queries
    mongoose.set('debug', true);

module.exports = mongoose.connection;