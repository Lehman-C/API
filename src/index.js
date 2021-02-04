const express = require('express');
const app = express();
const morgan = require('morgan');


//settings

 app.set('port',process.env.PORT || 8000);
 app.set('json spaces', 2)

//middlewares, funciones que se ejecutan antes de llegar al cliente
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});