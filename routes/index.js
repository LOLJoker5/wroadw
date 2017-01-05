var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    tt:'这个是一个变量'
  });
});

router.get('/login',function(req, res, next){
    res.render('login',{
        title:'我是一个登录页面'
    });
});

module.exports = router;
