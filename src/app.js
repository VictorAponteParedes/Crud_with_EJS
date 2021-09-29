const colors = require('colors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('./conection/conecction')
const indexRoutes = require('./routes/index')
const app = express();


app.set('port' , process.env.PORT || 9000);
app.set('views' , path.join(__dirname , 'views'));
app.set('view engine' , 'ejs');

//!configuracion
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(morgan('dev'))
//!Rutas
app.use('/' , indexRoutes)








app.listen(app.get('port'), ()=>{
    console.log('Server on port:'.blue.bold , app.get('port'))
})