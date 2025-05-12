// routes/sensorRoutes.js
const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');

// Rota para obter todos os sensores
router.get('/', sensorController.getSensors); // Agora é apenas "/"

// Rota para obter um sensor específico
router.get('/:id', sensorController.getSensorById); // Agora é apenas "/:id"

module.exports = router;
