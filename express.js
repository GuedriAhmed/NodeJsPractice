const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
 res.send('Bienvenue sur mon serveur Express.js !');
});
app.listen(PORT, () => {
 console.log(`Server Express en écoute sur le port
${PORT}`);
});

// Middleware global : affiche l'heure de la requête
app.use((req, res, next) => {
  const now = new Date();
  console.log(`[${now.toLocaleString()}] ${req.method} ${req.url}`);
  next(); // Passe au middleware suivant ou à la route
});


app.post('/contact', (req, res) => {
 res.send('Formulaire de contact envoyé');
});

app.get('/utilisateur/:id', (req, res) => {
 const id = req.params.id;
 res.send(`Utilisateur avec l'ID : ${id}`);
});
app.get('/produit/:id', (req, res) => {
 const id = req.params.id;
 res.send(`produit avec l'ID : ${id}`);
});

app.use((req, res, next) => {
 console.log(`${req.method} ${req.url}`);
 next(); // Passe à l'étape suivante
});

app.get('/secret', (req, res, next) => {
 console.log('Middleware exécuté pour /secret');
 next();
}, (req, res) => {
 res.send('Ceci est une page secrète.');
});
app.get('/a-propos', (req, res) => {
 res.send('Page À propos');
});

app.use(express.static('public'));