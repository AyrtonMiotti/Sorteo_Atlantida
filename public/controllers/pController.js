const controller = {};
const connection = require('./database/db');

// Consultar Participantes
controller.listParticipantes = (req, res) => {
    connection.query("SELECT * FROM participantes", (error, results) => {
        if (error) {
            res.json(error);
        } else {
            res.render("nh2", {data: results});
        }
    });
}


/* Consultar Ganadores
controller.historialGanadores = (req, res) => {
    connection.query("SELECT * FROM historial_ganadores", (error, results) => {
        if (error) {
            res.json(error);
        } else {
            res.render("historialGanadores", {data: results});
        }
    });
}


// Eliminar Ganador
controller.deleteGanador = (req, res) => {
    const cod_par = req.params.cod_par;
    connection.query("DELETE FROM historial_ganadores WHERE cod_par = ?", [cod_par], (error, results)=>{
        if (error) {
            res.json(error);
        } else {
            res.redirect("/historialGanadores");         
        }
    });
}


// Sortear
controller.sortearParticipantes = (req, res) => {
    connection.query(`
    SELECT p.cod_par, p.nombre_par, p.apellido_par, p.ultimos_dni_par
    FROM participantes p
    LEFT JOIN historial_ganadores g ON p.cod_par = g.cod_par
    WHERE g.cod_par IS NULL 
    ORDER BY RAND() LIMIT 3
    `, (error, results) => {
        if (error) {
            res.json(error);
        } else {
            results.forEach((ganador) => {
                connection.query(`INSERT INTO historial_ganadores SET ?`, ganador)
            })
            res.render("showGanadores", {data: results});
        }
    })
}


// Guardar Participante
controller.saveParticipante = (req, res) => {
    const ultimos_dni_par = req.body.ultimos_dni_par;
    const nombre_par = req.body.nombre_par;
    const apellido_par = req.body.apellido_par;
    
    connection.query("INSERT INTO participantes SET ?", 
        {
            ultimos_dni_par:ultimos_dni_par, 
            nombre_par:nombre_par, 
            apellido_par:apellido_par, 
        }, (error, results) => {
            if (error) {
                res.json(error);
            } else {
                res.redirect("/");         
            }
        }
    );
}


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