const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/learnyoumongo';
const objToInsert = { firstName: process.argv[2], lastName: process.argv[3] };

mongo.connect(url, (err, db) =>
  db.collection('docs')
    .insert(objToInsert)
    .then( _ => {
      console.log(JSON.stringify(objToInsert));
      db.close();
    })
);