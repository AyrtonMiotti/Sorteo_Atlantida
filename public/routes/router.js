const express = require("express");
const router = express.Router();

const partController = require("../controllers/pController");

router.get("/show-Participants", partController.showParticipants);

// Participantes
router.post("/add", partController.insertParticipant);
router.get("/delete/:cod_par", partController.deleteParticipant);
router.get("/edit/:cod_par", partController.editParticipant);
router.get("/raffle", partController.raffle)
router.get("/historialGanadores", partController.shoWinners);
router.get("/deleteGanador/:cod_par", partController.deleteWinner);



/*Routes*/ 
router.get('/winners2', partController.shoParticipants);


router.get('/', (req, res) => {
    return res.render('home');
})

router.get('/prueba', (req, res)=>{
    return res.render('form');
})
module.exports = router;