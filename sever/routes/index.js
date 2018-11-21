var express = require('express');
var router = express.Router();
var config = require('../db/config');
var db = require('../db/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.get('/hello', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/mysql', function(req, res, next){
    config.$query(db.queryAll, function (err,result){res.send(result);})
    // 代码块
});
module.exports = router;