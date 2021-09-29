const mongoose = require('mongoose');
const Schama = mongoose.Schema;

const TareaSchema =  new Schama ({

titulo:{
    type:String
},

descripcion:{
    type:String
},
estado:{
    type:Boolean,
    default:false
},

});
module.exports =  mongoose.model('Tarea' , TareaSchema);