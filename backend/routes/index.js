var express = require('express');
var router = express.Router();
const fs = require('fs')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// get fulllist of words 
router.get('/list', function(req, res, next) {
  fs.readFile('./db/db.json','utf-8',(err,data)=>{
    if(err){
      console.log(err)
      res.json({
        error:true
      })
    }
    res.status(200)
    res.json({
      response:JSON.parse(data),
      error:false
    })
  })
});
// translate a word
router.get('/translateToIPA/:word', function(req, res, next) {
  fs.readFile('./db/db.json','utf-8',(err,data)=>{
    if(err){
      console.log(err)
      res.json({
        error:true
      })
    }
    let db = JSON.parse(data)
    db.map(item=>{
      if(item.englishName == req.params.word){
      res.status(200)
      res.json({
      response:item.ipaText,
      englishName:item.englishName,
      status:true
    })
      }
    })

  })
});

module.exports = router;
