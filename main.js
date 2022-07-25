const express = require('express');
const a = express();
a.get('/api/main', function(req,res) {
    //res.send("Hi, Express JS");
    //res.send("<h1>Hi, Express JS HTML Tag</h1>");
    res.send({
        name : "RKG",
        age : 22,
        branch : "M.E."
    });
    
})
a.listen(9090, function() {
    console.log("Server Running");
    
})