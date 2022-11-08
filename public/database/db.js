const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "dpg-cdkraikgqg43pc4kgvg0-a",
    user: "root",
    password: "",
    database: "",
})

connection.connect((error)=>{
    if(error){
        console.log("El error de conexion es: " + error);
        return;
    }
    console.log("Conexion a la base de datos exitosa");
});

module.exports = connection;
