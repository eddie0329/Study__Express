const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const exphbs = require('express-handlebars');
const members = require('./Members'); 

const app = express();

//Init middleware
// app.use(logger);

//handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//hompage route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}));


//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

//Members API Routes
app.use('/api/members', require('./routes/api/member'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});
