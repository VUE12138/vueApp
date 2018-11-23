var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var config = require('../db/config');
var db = require('../db/db');

// 创建 application/json 解析
var jsonParser = bodyParser.json()

// 创建 application/x-www-form-urlencoded 解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/* GET users listing. */
router.post('/',urlencodedParser,function(req, res, next) {
  	if(!req.body) return res.sendStatus(400);
  	var account = req.body.user.account;
  	var psw = req.body.user.psw;
  	//return res.send(req.body.user.psw)
  	//查询数据库验证账号密码，产看是否对应，且状态是否正常
    config.$query(db.login,account, function (err,result){
  		if(err) return console.log(err)
  		// res.send(result)

      var r = JSON.parse(JSON.stringify(result))[0];
      console.log(r)
      if(!r) return res.send({login:false})
  		if(r.password == psw && r.accountState != 'frozen'){
  			res.send({login:true})
  		}else if(r.password == psw && r.accountState == 'frozen'){
  			res.send({login:'frozen'})
  		}else{
  			res.send({login:false})
  		}
  	})
  	
});

module.exports = router;