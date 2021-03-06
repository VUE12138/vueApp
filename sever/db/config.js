var mysql = require('mysql');
var pool = mysql.createPool({   
      host: 'cdb-mcxlb8zz.gz.tencentcdb.com',  // 主机名
      user: 'root',       // 用户名
      password: 'abc3330309',       // 密码
      database: 'vue',       // 数据库名 
      port: 10110          // 端口号（默认都是3306）
  });
function query(sql, values, callback) {
	// body...
	console.log('db query')
	 pool.getConnection(function (err, connection) {
        if(err) {
        	console.log('db connect error!')
        	throw err;
        }
        if(connection) {
        	console.log('db has connected')
        }
        //Use the connection
        connection.query(sql, values,function (err, results, fields) {
            console.log(JSON.stringify(results));
            //每次查询都会 回调
            callback(err, results);
            //只是释放链接，在缓冲池了，没有被销毁
            connection.release();
            if(err) throw error;
        });

    });
}
module.exports.$query = query;
