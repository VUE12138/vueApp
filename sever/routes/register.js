var express = require('express');
var router = express.Router();
var config = require('../db/config');
var db = require('../db/db');
var bodyParser = require('body-parser');


// 创建 application/json 解析
var jsonParser = bodyParser.json()

// 创建 application/x-www-form-urlencoded 解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/* GET home page. */
router.post('/',urlencodedParser, function(req, res, next){
	if (!req.body) return res.sendStatus(400)
	//查询数据库是否有同名账号，有则将flag设为true
	var flag = false;
	var msg = req.body.register;
	config.$query(config.login,msg.account,function (err,result){
    	if(result.login=='true'||result.login=='frozen'){
    		flag=ture;
    	}else{
    		return res.send({register:existed})
    	}
    })
    if(!flag){
		//生成32BIt msg_id 和登录时间格式yyyy-mm-dd+ 下午 hh：mm：ss
		var msg_id = uuid.v1();
		var date = new Date();
		var n = date.getFullYear();
		var y = date.getMonth() + 1;
		var r = date.getDate();
		var mytime = date.toLocaleTimeString();
		var msg_date = n + "-" + y + "-" + r + " " + mytime;
		//插入账户信息
	    config.$query(config.registerUser,{id:msg_id,name:'',account:msg.account,password:msg.psw,accountState:'normal',lastLoginDate:msg_date},function (err,result){
	    	if(result)res.send(result);
	    })
	    // 代码块
    }
});
module.exports = router;