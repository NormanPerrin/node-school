const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/' + process.argv[2];
const collection = process.argv[3];
const _id = process.argv[4];

mongo.connect(url, (err, db) =>
  db.collection(collection)
    .remove({_id})
    .then( _ => db.close() )
);