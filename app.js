var express = require("express"),
  app = express();

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () =>
  console.log(`digiscript listening on port ${PORT} !`)
);

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + "/"));

/* At the top, with other redirect methods before other routes */
 app.get('*',function(req,res,next){
   if(req.headers['x-forwarded-proto']!='https')
     res.redirect('https://thedigiscript.com'+req.url)
   else
     next() /* Continue to other routes if we're not redirecting */
 })

app.get("/", function(req, res){
    res.render("index")
})
