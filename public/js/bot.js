function firstBotMessage(){
    let firstMess = "Hola"

}

console.log(OptionsButtons = ['Muy Bien', 'Bien', 'No tan Bien', 'Mal', 'Prefiero no contestar', 'Excelente', 'Para el orto']);

const Chatcontroller = {};
const connection = require('../database/db');

var OptionsButtons = [];
var DialogCharacter = [];
var results = [];

Chatcontroller.firstOptions = (req, res) => {
    OptionsButtons = ['Muy Bien', 'Bien', 'No tan Bien', 'Mal', 'Prefiero no contestar', 'Excelente', 'Para el orto'];
    DialogCharacter = 'Me alegra mucho verte, ¿Como te sientes hoy?';
    results.append(OptionsButtons, DialogCharacter);
    res.render("", {data: results});

}

Chatcontroller.secondOptions = (req, res) => {
    OptionsButtons = ['Jugar', 'Hablar', 'Necesito un consejo', 'Chistes', 'Amor', 'Adivinanzas!'];
    DialogCharacter = 'Dime, que quieres hacer ahora?';
    results.append(OptionsButtons, DialogCharacter);
    res.render("", {data: results});
}

Chatcontroller.TalkOptions = (req, res) => {
    OptionsButtons = ['Problemas', 'Familia', 'Amigos', 'Mascotas', 'Amor', 'Juegos!'];
    DialogCharacter = 'Dime, ¿De qué quieres hablar?';
    results.append(OptionsButtons, DialogCharacter);
    res.render("", {data: results});
}

Chatcontroller.TipOptions = (req, res) => {
    OptionsButtons = ['Problemas', 'Familia', 'La Vida', 'Bullying', 'Amor', '']; //FALTA
    DialogCharacter = 'Decime, ¿Sobre qué necesitas un consejo?'
    results.append(OptionsButtons, DialogCharacter);
    res.render("", {data: results});
}

Chatcontroller.Chistes = (req, res) => { //Ni puta idea
    OptionsButtons = ['', '', ' ', '', '', '']; 
    DialogCharacter = '';
    results.append(OptionsButtons, DialogCharacter);
    res.render("", {data: results});
}

Chatcontroller.LoveOptions = (req, res) => {
    OptionsButtons = ['', '', ' ', '', '', '']; 
    DialogCharacter = 'Ten en cuenta que el gran amor y los grandes logros, requieren grandes riesgos';
    results.append(OptionsButtons, DialogCharacter);
    res.render("", {data: results});
}

Chatcontroller.RiddleOptions = (req, res) => {
    OptionsButtons = ['', '', ' ', '', '', '']; 
    DialogCharacter = 'Tengo agujas, y no se coser, tengo números y no se leer... ¿Qué soy?';
    results.append(OptionsButtons, DialogCharacter);
    res.render("", {data: results});
}

Chatcontroller.TipOptions = (req, res) => {
    OptionsButtons = ['', '', ' ', '', '', '']; 
    DialogCharacter = '';
    results.append(OptionsButtons, DialogCharacter);
    res.render("", {data: results});
}

Chatcontroller.TipOptions = (req, res) => {
    OptionsButtons = ['', '', ' ', '', '', '']; 
    DialogCharacter = '';
    results.append(OptionsButtons, DialogCharacter);
    res.render("", {data: results});
}





module.exports = Chatcontroller;


const div = getElementById()