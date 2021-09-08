const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');

const app = express();

//Connect DB
mongoose
  .connect('mongodb://localhost/smartedu-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connected successfully');
  });

//Template Engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));

//ROUTES
app.use('/', pageRoute);
app.use('/create', courseRoute)

const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
