require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI_TEST);
        console.log('Conectado a MongoDb');

        // Iniciar el servidor después de conectar a la base de datos
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
})();

//Rutas front-end
app.use('/', express.static(path.resolve('front-end', 'viws', 'home' )));

module.exports = app;