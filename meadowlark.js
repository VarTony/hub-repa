var express  = require("express");
var fortune = require("./lib/fortune.js");


var app = express();

//Установка механизма представления handlebars


var handlebars = require("express-handlebars")
  .create({ defaultLayout: "main"});
app.engine("handlebars",  handlebars.engine);
app.set("view engine", "handlebars");



app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + "./public"));

app.use(function(req, res, next){
  res.locals.showTests = app.get("env") !== "prodaction" &&
    req.query.test === "1";
   next();
});



app.get("/",  function(req, res){
  res.render("home");
});

app.get("/about",  function(req, res){
  res.render("about", {fortunes: fortune.getFortune(),
    pageTestScript: "/qa/tests-about.js"
  });
});

app.get('/tours/hood-river', function(req, res){
	res.render('tours/hood-river');
});
app.get('/tours/oregon-coast', function(req, res){
	res.render('tours/oregon-coast');
});
app.get('/tours/request-group-rate', function(req, res){
	res.render('tours/request-group-rate');
});

//пользовательская страница 404

app.use(function(req, res, next){
  res.status(404);
  res.render("404");
});

//Пользовательская страница 500

app.use(function(err,  req, res, next){
  console.error(err,stack);
  res.status(500);
  res.render("500");
});

app.listen(app.get("port"),  function(){

console.log("Express запущен на http://localhost:" +
app.get("port") + "; Нажмите ^C для завершения." )

});
