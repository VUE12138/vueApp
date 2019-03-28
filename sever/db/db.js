var db = {  
	//测试表persons ，返回全表内容  
    queryAll: 'SELECT * FROM persons', 
    //插入表userlogin，用于注册账号
    registerUser:'insert into userlogin (id,name,account,password,accountState,lastLoginDate) values (?,?,?,?,?,?)',
    login:'select * from userlogin where account = ?',
};

module.exports = db;
