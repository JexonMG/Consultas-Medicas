require('dotenv').config({ path: './backend/prisma/.env' }); // Ensure this path is correct

const express = require('express');
const { PrismaClient } = require('./backend/node_modules/@prisma/client'); 
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(cors());

app.get('/doctores', async (req, res) => {
    try {
        const doctores = await prisma.doctores.findMany();
        res.json(doctores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
