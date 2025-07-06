const usersRouter= require('express').Router(); // Importa el enrutador de Express
const User = require('../models/user');
const bcrypt = require('bcrypt'); // Importa bcrypt para el hash de contraseñas
const jwt = require('jsonwebtoken'); // Importa jsonwebtoken para manejar tokens JWT
const nodemailer = require('nodemailer'); // Importa nodemailer para enviar correos electrónicos
const {PAGE_URL} = require('../config'); // Importa la URL de la página desde la configuración

// Ruta para registrar un nuevo usuario
usersRouter.post('/', async (request, response) => {
    const { name, email, password } = request.body;

    if (!name || !email || !password) { // Verifica si todos los campos son proporcionados
        return response.status(400).json({error: 'Todos los campos son obligatorios' });
    }

    // Validación de email
    const userExists = await User.findOne({ email }); // Busca si el usuario ya existe en la base de datos
    
    if (userExists) {
        return response.status(400).json({error: 'El email ya está en uso' });

    }
    const passwordHash = await bcrypt.hash(password, 10); // Hash de la contraseña
    const newUser = new User({
        name,
        email,
        passwordHash,
    });

    const savedUser = await newUser.save(); // Guarda el nuevo usuario en la base de datos
    const token = jwt.sign({ id: savedUser.id }, process.env.ACCESS_TOKEN_SECRET, { 
        expiresIn: '1d' // El token expirará en 1 dia
    });

// Create a test account or replace with real credentials.
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Cambia el host si es necesario 
        port: 465, // Cambia el puerto si es necesario
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER, // Reemplaza con tu usuario de email
            pass: process.env.EMAIL_PASS, // Reemplaza con tu contraseña de email
    },
    });

// Envía un correo electrónico de bienvenida al nuevo usuario
    await transporter.sendMail({
        from: process.env.EMAIL_USER, // Remitente',
        to: savedUser.email, // Destinatario
        subject: 'Verificacion de usuario', // Asunto del correo
        html: `<a href="${PAGE_URL}/${token}">Verificar correo</a>`, // HTML body
    });
    
    return response.status(201).json('Usuario creado. Por favor verifica tu correo');

});

module.exports = usersRouter;