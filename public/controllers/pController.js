const controller = {};
const connection = require('./database/db');

//____________________________PARTICIPANTES____________________________

// Consultar
controller.showParticipants = (req, res) => {
    connection.query("SELECT * FROM participantes", (error, results) => {
        if (error) {
            res.json(error);
        } else {
            res.render("nh2", {data: results});
        }
    });
}

//SORTEAR
controller.raffle = (req, res) => {
    connection.query("ACA VA LO Q HIZO LUDMI", (error, results) => {
        if (error) {
            res.json(error);
        } else {
            results.forEach((ganador) => {
                connection.query(`INSERT INTO historial_ganadores SET ?`, ganador)
            })
            res.render("", {data: results}); //nexthome?
        }
    })
} 

//CARGAR
controller.insertParticipant = (req, res) => {
    const DNI = req.body.DNI;
    const mombre = req.body.nombre;
    const apellido = req.body.apellido;

    connection.query('INSERT INTO alumnos (DNI, nombre, apellido) VALUES(' + DNI + ",'" + nombre + "','" + apellido + "');", (error, results) => {
        if (error) {
            res.json(error);
        } else {
            res.redirect("/");  // Pestaña de agregar participante       
        }       
    });

}

//______________________________GANADORES______________________________
// VER
controller.shoWinners = (req, res) => {
    connection.query("SELECT * FROM winners_history", (error, results) => { //Crear la tabla.
        if (error) {
            res.json(error);
        } else {
            res.render("nh2", {data: results}); //Cambiar a Pestaña donde se muestran los ganadores.
        }
    });
}

//Eliminar
controller.deleteWinner = (req, res) => {
    const IDA = req.params.IDA;
    connection.query("DELETE FROM winners_history WHERE cod_par = ?", [IDA], (error, results)=>{
        if (error) {
            res.json(error);
        } else {
            res.redirect("/"); //Pestaña donde c muestran losganadores C.
        }
    });
}






/*
// Editar Participante
controller.editParticipante = (req, res) => {
    const cod_par = req.params.cod_par;
    connection.query("SELECT * FROM participantes WHERE cod_par=?", [cod_par], (error, results)=>{
        if (error) {
            throw error;
        } else {
            res.render("editParticipantes", {data:results[0]});
        }
    });
}


// Actualizar Participante
controller.updateParticipante = (req, res) => {
    const cod_par = req.params.cod_par;
    const ultimos_dni_par = req.body.ultimos_dni_par;
    const nombre_par = req.body.nombre_par;
    const apellido_par = req.body.apellido_par;

    connection.query("UPDATE participantes SET ? WHERE cod_par = ?", 
        [{
            ultimos_dni_par:ultimos_dni_par, 
            nombre_par:nombre_par, 
            apellido_par:apellido_par, 
        }, cod_par], (error, results)=>{
            if (error) {
                console.log(error);
            } else {           
                res.redirect("/");         
            }
        }
    );
}


// Borrar Participante
controller.deleteParticipante = (req, res) => {
    const cod_par = req.params.cod_par;
    connection.query("DELETE FROM participantes WHERE cod_par = ?", [cod_par], (error, results)=>{
        if (error) {
            res.json(error);
        } else {
            res.redirect("/");         
        }
    });
}

*/

// Export
module.exports = controller;



/*
function charge(datos){
    var parTable = document.getElementById('participanTable')  
    for(let i = 0; i<datos.length; i++){
        var newParTableRow = parTable.insertRow(-1);
        for(let x=0; x<3; x++){
            var newParTableCell = newParTableRow.insertCell(x)
            datoFila = datos[i][x];
            newParTableCell.textContent = datoFila;
        }
    }
}

app.get('/', (req, res)=>{
    connection.query('SELECT * FROM alumnos', (error, results) =>{
        console.log(results)
        if(error){console.log("El error que devolvió SQL es: " + error);
            return;}

        else{
            datos = []
            for(let i = 0; i<results.length; i++){
                var IDA = results[i].IDA;
                var APE = results[i].apellido;
                var NOM = results[i].nombre;
                var DNI = results[i].DNI;

                console.log(IDA, APE, NOM, DNI);
                newArray = []
                newArray.push(IDA, APE, NOM, DNI);
                datos[i] = newArray;
            }
            console.log('-----------------------------------------\n', datos)
        }
    })
})
*/