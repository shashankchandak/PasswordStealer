var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/storePass',function (req,res) {
  console.log(req.body.data);
  
  var MongoClient = require('mongodb').MongoClient;
  var localUrl = "mongodb://localhost:27017/passwords";
  
  MongoClient.connect(localUrl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("passwords");
  //change hardcoded to user name
  let dbdata = {}
  dbdata.user = req.body.user;
  dbdata.passwords = req.body.passwords;
  dbo.collection('pass').insertOne(dbdata, function(err, res) {
      if (err) throw err;
      db.close();
    });
  });

  var remoteUrl = 'mongodb+srv://admin:admin@cluster0-xugzd.mongodb.net/test?retryWrites=true&w=majority';
  MongoClient.connect(remoteUrl, function(err, db) {
    if (err) throw err;
    var dbo = db.db("passwords");
    console.log("connected");
    
    //change hardcoded to user name
    let dbdata = {}
    dbdata.user = req.body.user;
    dbdata.passwords = req.body.passwords;
    dbo.collection('pass').insertOne(dbdata, function(err, res) {
        if (err) throw err;
        db.close();
      });
    });

  res.send("1");
});

module.exports = router;
