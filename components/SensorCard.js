import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente SensorCard recebe os dados de um sensor e exibe as informações
export default function SensorCard({ sensor }) {
    return (
        <View style={[styles.card, { backgroundColor: getCardColor(sensor.status) }]}>
            <Text style={styles.name}>{sensor.name}</Text>
            <Text>Status: {sensor.status}</Text>
            <Text>Valor: {sensor.value}</Text>
        </View>
    );
}

// Função para determinar a cor do card com base no status do sensor
function getCardColor(status) {
    if (status === 'operando normalmente') return '#3AAB7B'; // Verde para operação normal
    if (status === 'alerta') return '#FFC107'; // Amarelo para alerta
    return '#E53935'; // Vermelho para problemas críticos
}

const styles = StyleSheet.create({
    card: {
        padding: 15,
        marginBottom: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#3AAB7B',
        marginHorizontal: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});
