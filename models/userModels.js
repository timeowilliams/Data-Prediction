const mongoose = require('mongoose');

const MONGO_URI = 'YOUR_URI_HERE';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'countries'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

// sets a schema for the 'species' collection
const userSchema = new Schema({
  name: String,
  favoriteCountry: String,
  language: String,
  homeworld: String,
  homeworld_id: {
    // type of ObjectId makes this behave like a foreign key referencing the 'planet' collection
    type: Schema.Types.ObjectId,
    ref: 'planet'
  }
});

// creats a model for the 'species' collection that will be part of the export
const User = mongoose.model('user', userSchema);


// exports all the models in an object to be used in the controller
module.exports = {
  Species,
  // Planet,
  // Film,
  // Person
};
