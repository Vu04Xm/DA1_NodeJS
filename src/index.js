const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path= require('path');
const app = express();
const port = 3000;
const routes = require('./routes');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(express.static(path.join(__dirname, 'public')))
routes(app);
app.use(morgan('combined'));
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
