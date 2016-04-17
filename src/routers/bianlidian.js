var express = require('express');
var router = express.Router();

var categorylist = [{id:1,name:'哈哈哈哈'},{id:2,name:'哈哈哈哈2'},{id:3,name:'哈哈哈哈'},{id:4,name:'哈哈哈哈'},
                    {id:5,name:'哈哈哈哈'},{id:6,name:'哈哈哈哈'},{id:7,name:'哈哈哈哈'},{id:8,name:'哈哈哈哈'}];

router.get('/category/list.ajax', function (req, res) {
	console.log("Cookies: ", req.cookies)
	res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
  res.json(
  	{
  		"data": categorylist,
  		"code": 0,
  		"msg": "success"
  	});
});

router.post('/poisku/update.ajax', function (req, res) {

	console.log("Cookies: ", req.cookies)
	console.log("body", req.body)
	res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
  	res.json(
  	{
  		"data": 0,
  		"code": 2000,
  		"msg": "success"
  	});
});

module.exports = router;