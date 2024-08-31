require('dotenv').config({ path: './backend/prisma/.env' }); // Ensure this path is correct

const express = require('express');
const { PrismaClient } = require('./backend/node_modules/@prisma/client'); 
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(cors());
// Doctores API
app.get('/doctores', async (req, res) => {
    try {
        const doctores = await prisma.doctores.findMany();
        res.json(doctores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/doctores', async (req, res) => {
    try {
        const { codigo_CM, nombre, apellido, especialidad } = req.body;

        // Create a new doctor without specifying the `id`
        const doctor = await prisma.doctores.create({
            data: {
                codigo_CM: codigo_CM,
                nombre: nombre,
                apellido: apellido,
                especialidad: especialidad
            }
        });

        res.json(doctor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Consultas API
app.get('/consultas', async (req, res) => {
    try {
        const consultas = await prisma.consultas.findMany();
        res.json(consultas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/consultas', async (req, res) => {
    try {
        const { sexo, telefono, citaId, doctorId } = req.body;

        const consulta = await prisma.consultas.create({
            data: {
                sexo: sexo,
                telefono: telefono,
                citaId: citaId,
                doctorId: doctorId
            }
        });
        res.json(consulta);
    } catch (error) {
        console.error(error);   
        res.status(500).json({ error: 'Internal server error' });
    }
});


// Citas API
app.get('/citas', async (req, res) => {
    try {
        const citas = await prisma.citas.findMany();
        res.json(citas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
