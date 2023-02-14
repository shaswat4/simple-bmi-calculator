
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));

app.get( "/" , function (req , res) {
    res.sendFile( __dirname +  "/index.html");
} );

app.post( "/" , function (req, res) {
    
    console.log( req.body );

    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var ans = n1 + n2 ;

    console.log(ans);

    res.send("answer is " +  ans );

} );

app.get( "/bmicalculator" , function (req , res){
    res.sendFile( __dirname + "/bmiCalculator.html");
})

app.post( "/bmicalculator" , function (req, res){
    console.log(req.body);
    res.send("success");
})
 
app.listen( 3000 , function () {
    console.log("listening at port 3000");
});