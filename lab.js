var connect = require ('connect');
var http = require('http');

var app = connect();


function doFirst (req,res, next)  {
    console.log("Bacon");
    next();
}

function doSecond (req,res, next)  {
    console.log("Eggs");
    next();

}
function proFile(req,res)  {
    res.writeHeader(200, {'Content-Type': 'text/html'});
    res.write("Hello World!");
    res.end();
}

app.use(doFirst);
app.use(doSecond);
app.use('/profile', proFile);

http.createServer(app).listen(8889);
console.log("Server is running");

