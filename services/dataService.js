import sensorsData from '../mock/sensors.json'; // Dados simulados

export const getSensors = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(sensorsData); // Retorna os dados simulados após um pequeno delay
        }, 1000); // Simula um tempo de carregamento
    });
};
