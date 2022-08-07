var express = require("express");
var axios = require("axios");
var router=express.Router();

// const cors = require("cors");
// app.use(cors());

async function doGetRequest() {

    // let res = await axios.get('http://webcode.me');
    let res = await axios.get('https://fruityvice.com/api/fruit/1');
  
    let data = res.data;
    console.log(res);
  }

  
  router.get("/", function(req, res, next){

    const chamada =  await axios.get('https://fruityvice.com/api/fruit/1');
  
    let data = res.data;
    res.send(chamada);
    // res.send("API is fuking working caarrraaaiii hehe");
})  

module.exports = router;