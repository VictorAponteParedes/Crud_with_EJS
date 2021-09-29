const mongoose = require('mongoose');
const colors = require('colors');
const uri = 'mongodb://localhost:27017/Crud_Node'.red.bold;
mongoose.connect(uri , {
    useNewUrlParser:true,
    useUniFiedTopology: true
})
.catch(err => console.log('Este es el Problema:'.red.bold , err));
mongoose.connection.once('open' , _=> {
console.log('Base de datos esta conectada'.blue.bold, uri)})