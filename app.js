const express = require('express');
const app = express();
// const request = require('request');

app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.get('/CityCountyDistrict', function(req, res) {
    res.render('CityCountyDistrict.ejs');
   });

app.listen(3000, function(){
  console.log('App is listening on port 3000');
});
