var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
//token
const jwt= require('jsonwebtoken');
const expressJwt = require('express-jwt');


// 创建 application/json 解析
var jsonParser = bodyParser.json()

// 创建 application/x-www-form-urlencoded 解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//



var registerRouter = require('./routes/register');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloRouter = require('./routes/hello');
var loginRouter = require('./routes/login');
var cors = require('cors');

var app = express();
//
app.use(cors());
// var basic = require('./db/basic');
app.use(expressJwt ({
    secret: 'hahaha' 
}).unless({
    path: ['/login','/register']  //除了这些地址，其他的URL都需要验证
}));
app.use(function (err, req, res, next) {
    //当token验证失败时会抛出如下错误
    if (err.name === 'UnauthorizedError') {   
        //这个需要根据自己的业务逻辑来处理（ 具体的err值 请看下面）
        res.status(401).send('invalid token...');
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hello', helloRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



// app.all('*', function (req, res, next) {
//   res.header("Access-Control-Allow-Credentials", true)
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "X-Requested-With")
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
//   res.header("X-Powered-By", ' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8")
//   next()
// })

module.exports = app;
