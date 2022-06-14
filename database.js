const mongoose = require('mongoose'); //modulo para conectar nodejs con mongodb

//configuramos los parámetros de la base de datos
url = 'mongodb+srv://sistema_empleados:Sistemaempleados.2021@sistema.80xwq.mongodb.net/empleados?retryWrites=true&w=majority'; //creo esto crea una nueva base de datos en mongoDB
//url = 'mongodb://localhost/empleados';
dbparams = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
};

mongoose.connect(url)
    .then( db => console.log("BD está conectada"))
    .catch(err => console.log(err));

module.exports = mongoose;