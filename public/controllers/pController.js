const controller = {};
const connection = require('../database/db');

//____________________________PARTICIPANTES____________________________

//CONSULTAR || SHOW
controller.showParticipants = (req, res) => {
    connection.query("SELECT * FROM participantes", (error, results) => {
        if (error) {
            res.json(error);
        } else {
            res.render("next_home", {data: results});
        }
    });
}

//SORTEAR || RAFFLE
controller.raffle = (req, res) => {
    connection.query("ACA VA LO Q HIZO LUDMI", (error, results) => {
        if (error) {
            res.json(error);
        } else {
            results.forEach((ganador) => {
                connection.query('INSERT INTO historial_ganadores SET ?', [ganador])
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

//EDITAR || EDIT
controller.editParticipant = (req, res) => {
    const DNI = req.params.DNI;
    connection.query('SELECT * FROM alumnos WHERE DNI = ?', [DNI], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render("", {data:results[0]}); // Pestaña Editar -- Chane 0 x number of index
        }
    });
}     

//ELIMINAR || DELETE
controller.deleteParticipant = (req, res) => {
    const DNI = req.params.DNI;
    connection.query('DELETE FROM alumnos WHERE DNI = ?', [DNI], (error, results) => {
        if(error){
            res.json(error);
        }
        else{
            res.redirect('/')
        }
    } )
}
//_____________________________________________________________________



//______________________________GANADORES______________________________

// VER || SHOW
controller.shoWinners = (req, res) => {
    connection.query("SELECT * FROM winn_history", (error, results) => { //Crear la tabla.
        if (error) {
            res.json(error);
        } else {
            res.render("showWinners", {data: results}); //Cambiar a Pestaña donde se muestran los ganadores.
        }
    });
}

//ELIMINAR || DELETE
controller.deleteWinner = (req, res) => {
    const IDA = req.params.IDA;
    connection.query("DELETE FROM winn_history WHERE cod_par = ?", [IDA], (error, results)=>{
        if (error) {
            res.json(error);
        } else {
            res.redirect("/"); //Pestaña donde c muestran losganadores C.
        }
    });
}
//_____________________________________________________________________



controller.shoParticipants = (req, res) => {
    connection.query("SELECT * FROM participantes", (error, results) => {
        if (error) {
            res.json(error);
        } else {
            res.render("form", {data: results});
        }
    });
}

// EXPORT || EXPORTACION
module.exports = controller;