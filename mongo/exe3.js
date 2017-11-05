const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/learnyoumongo';
const age = parseInt(process.argv[2]);

mongo.connect(url, (err, db) =>
  db.collection('parrots')
    .find({ age: {$gt: age} })
    .toArray()
    .then( res => {
      console.log(res);
      db.close();
    })
);