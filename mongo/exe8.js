const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/learnyoumongo';
const ageToCompare = parseInt(process.argv[2]);

mongo.connect(url, (err, db) =>
  db.collection('parrots')
    .count({age: {$gt: ageToCompare}})
    .then( res => {
      console.log(res);
      db.close();
    })
);