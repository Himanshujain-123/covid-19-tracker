var express = require('express');
var app = express();
var bodyparser = require('body-parser');
const path=require('path');

// mongoose.connect('mongodb://localhost/covid19', {useNewUrlParser: true,useUnifiedTopology: true}).then(() => {
//     console.log("Connected to Database");
//     }).catch((err) => {
//         console.log("Not Connected to Database ERROR! ", err);
// });


app.use(express.static(path.join(__dirname,"public")));
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({extended:true}));

var pageRoutes =  require('./routes/index');
var worldcovid = require('./routes/worldcovid');
var indiacovid = require('./routes/indiacovid');



app.use(pageRoutes);
app.use(worldcovid);
app.use(indiacovid);


var PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is running on " + PORT));
