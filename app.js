var express = require("express"),
  app = express();

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () =>
  console.log(`digiscript listening on port ${PORT} !`)
);

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + "/"));

app.get("/", function(req, res){
    res.render("index")
})
