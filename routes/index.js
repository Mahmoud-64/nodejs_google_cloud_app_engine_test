var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(process.env);
environment = process.env
  return res.json( { environment: environment });
});

module.exports = router;
