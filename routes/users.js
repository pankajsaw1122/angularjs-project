var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/userLogin', function(req, res, next) {
  if(req.body.pwd === 'admin') {
    let data = {
      status: 200,
      msg: 'success',
      data: {
        userId: 1,
        userName: req.body.userName,
        userEmail: 'pankajsaw1122@gmail.com' 
      }
    }
    res.send(data);
  } else {
    let data = {
      status: 203,
      msg: 'failed',
      data: {}
    }
    res.send(data);
  }
})
module.exports = router;
