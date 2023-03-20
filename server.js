// require dependencies
// const mongoose = require("mongoose");
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
// const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;


// express middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static('public'));
app.use(routes);


// // MONGO

// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialnetwork_api",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   );
// executed mongo queries
    // mongoose.set('debug', true);



db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
  });
});

