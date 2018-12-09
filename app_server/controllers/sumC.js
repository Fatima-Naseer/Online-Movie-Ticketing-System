var mongoose = require("mongoose");
var pay=require('../models/payment');
var mongoose = require("mongoose");
/*
module.exports.nothing7 = function(req, res, next) {
    globalstring+=pay.username;
    
       pay.find({username: globalstring} ["_id"],function(err,docs){
if(err){
    console.log("jjjjj");
    res.json(err);
}
else 
{
    console.log("hhhh");
    res.render("paymentsummary.html", {payment : docs} );

}
       });
    };
     */   
        
    module.exports.nothing7 = function(req, res, next) { 
        var resultArray = [];
        
          var cursor = data.collection(payment).find();
          cursor.forEach(function(doc, err) {
            resultArray.push(doc);
          }, function() {
            res.render("paymentsummary.html", {items: resultArray});
          });
    
        };