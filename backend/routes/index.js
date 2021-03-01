var express = require('express');
var router = express.Router();
const fs = require('fs')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/translateToEnglish', function(req, res, next) {
  fs.readFile('./db/db.json','utf-8',(err,data)=>{
    if(err){
      console.log(err)
      res.json({
        error:true
      })
    }
    console.log(JSON.parse(data))
  })
});
module.exports = router;
