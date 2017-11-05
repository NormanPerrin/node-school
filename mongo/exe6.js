const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/' + process.argv[2];

mongo.connect(url, (err, db) =>
  db.collection('users')
    .update({username: 'tinatime'}, {$set: {age: 40}})
    .then( _ => db.close())
);