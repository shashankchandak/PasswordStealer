var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/storePass',function (req,res) {
  console.log(req.body.data);
  
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/passwords";
  
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("passwords");
  //change hardcoded to user name
  dbo.collection("shashank").insertOne(req.body.data, function(err, res) {
      if (err) throw err;
      db.close();
    });
  });

  res.send("1");
});

module.exports = router;
