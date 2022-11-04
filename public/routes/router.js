const express = require("express");
const router = express.Router();

const partController = require("../controllers/pController");

router.get("/", partController.listParticipantes);

// Participantes
router.post("/add", partController.saveParticipante);
router.get("/delete/:cod_par", partController.deleteParticipante);
router.get("/edit/:cod_par", partController.editParticipante);
router.post("/update/:cod_par", partController.updateParticipante);
router.get("/sortear", partController.sortearParticipantes)
router.get("/historialGanadores", partController.historialGanadores);
router.get("/deleteGanador/:cod_par", partController.deleteGanador);

module.exports = router;


/*++++++++++++++++++++*/ 
router.get('/', partController.showParticipants);
router.get('/winners', partController.shoWinners);

router.get('/participantes', (req, res)=>{
    return res.render('nh2');
})