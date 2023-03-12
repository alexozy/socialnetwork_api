// require dependencies

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;


// express middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static('public'));

app.use(require('./routes'));

// MONGO
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/socialnetwork_api",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
// executed mongo queries
    mongoose.set('debug', true);
// this code isn't working
// db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server for ${activity} running on port ${PORT}!`);
//     });

app.listen(PORT, () => console.log (`Listening on ${PORT}`));