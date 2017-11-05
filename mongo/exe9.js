const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/learnyoumongo';
const size = process.argv[2];

mongo.connect(url, (err, db) =>
  db.collection('prices')
    .aggregate([
      { $match: {size} },
      { $group: {_id: 'average', average: {$avg: '$price'}} }
    ])
    .toArray()
    .then(res => {
      console.log(Number(res[0].average).toFixed(2));
      db.close();
    })
);