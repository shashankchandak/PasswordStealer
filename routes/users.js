var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/storePass',function (req,res) {
  console.log(req.body.data);

  res.send("1");
});

module.exports = router;
