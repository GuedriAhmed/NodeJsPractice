console.log("Hello, World!");
const os = require('os');
//Créez un programme qui affiche la date actuelle dans ce format : Lundi, 13 Janvier 2025.
const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const mois = ["Janvier", "Février", "Mars", "Avril",
    "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const date = new Date();
const jourSemaine = jours[date.getDay()];
const jourMois = date.getDate();
const moisAnnee = mois[date.getMonth()];
const annee = date.getFullYear();
console.log(`Aujourd'hui, nous sommes le ${jourSemaine}, ${jourMois} ${moisAnnee} ${annee}.`);

console.log("Nom du système :", os.type());
console.log("Nombre des processeurs :", os.cpus());
console.log("Mémoire libre :", os.freemem());
console.log("Mémoire totale :", os.totalmem());
const _ = require('lodash');
const array = [1, 2, 3, 4, 5];
console.log("Premier élément :", _.first(array));
console.log("Dernier élément :", _.last(array));
// Créez une fonction qui prend en entrée un tableau de nombres et retourne la somme de ces nombres.
const math = require('./math');
console.log("Addition :", math.addition(3, 5));
console.log("Multiplication :",
math.multiplication(4, 6));
//Importez le module util.js dans un fichier principal et testez-le
const util = require('./util');
console.log("Conversion 25°C en Fahrenheit :", util.celsiusToFahrenheit(25));
// lire fichier texte data.txt avec la callback
const fs = require('fs');
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Erreur de lecture du fichier :", err);
        return;
    }
    console.log("Contenu du fichier :", data);
});
//lire fichier texte data.txt avec la promise
const fsPromises = require('fs').promises;
fsPromises.readFile('data.txt', 'utf8')
    .then(data => {
        console.log("Contenu du fichier (Promise) :", data);
    })
    .catch(err => {
        console.error("Erreur de lecture du fichier (Promise) :", err);
    });
//: Lecture de fichier avec async/await
async function lireFichier() {
    try {
        const data
    = await fsPromises.readFile('data.txt', 'utf8');
        console.log("Contenu du fichier (Async/Await) :", data);
    } catch (err) {
        console.error("Erreur de lecture du fichier (Async/Await) :", err);
    }
}
lireFichier();
//Créez une fonction async qui : Lit un fichier config.json contenant une clé name Affiche la valeur associée à name.
async function lireConfig() {
    try {
        const data
        = await fsPromises.readFile('config.json', 'utf8');
        const config = JSON.parse(data);
        console.log("Nom dans config.json :", config.name);
    } catch (err) {
        console.error("Erreur de lecture du fichier config.json :", err);
    }
}
lireConfig();
