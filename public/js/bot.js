function getTime(){
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if(hours < 10){
        hours = '0' + hours
    }

    if(minutes < 10){
        minutes = '0' + minutes
     }

    let time = hours + ':' + minutes;
    return time;
}

getTime();

function firstBotMessage(){
    let firstMess = "Hola"

}

console.log(OptionsButtons = ['Muy Bien', 'Bien', 'No tan Bien', 'Mal', 'Prefiero no contestar', 'Excelente', 'Para el orto']);

const Chatcontroller = {};
const connection = require('../database/db');

var OptionsButtons = [];
var 

Chatcontroller.firstOptions = (req, res) => {
    OptionsButtons = ['Muy Bien', 'Bien', 'No tan Bien', 'Mal', 'Prefiero no contestar', 'Excelente', 'Para el orto'];

}