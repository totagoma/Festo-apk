const express = require('express');
const router = express.Router();

const sensorRoutes = require('./sensorRoutes'); // <- Este caminho deve estar correto

router.use('/sensors', sensorRoutes); // Resultado: /api/sensors

module.exports = router;
