// controllers/sensorController.js
const sensors = require('../mock/sensors.json'); // Mock de sensores

exports.getSensors = (req, res) => {
    res.json(sensors);  // Retorna a lista de sensores mockados
};

exports.getSensorById = (req, res) => {
    const sensorId = parseInt(req.params.id);
    const sensor = sensors.find(s => s.id === sensorId);
    if (!sensor) {
        return res.status(404).json({ message: 'Sensor não encontrado' });
    }
    res.json(sensor);
};
