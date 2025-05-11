import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const getStatusColor = (status) => {
    switch (status) {
        case 'ok':
            return '#10B981'; // verde
        case 'alerta':
            return '#EF4444'; // vermelho
        case 'outro':
            return '#F59E0B'; // amarelo
        default:
            return '#6B7280'; // cinza
    }
};

export default function HomeScreen({ navigation }) {
    const [sensors, setSensors] = useState([]);

    useEffect(() => {
        const simulatedSensors = [
            {
                id: 1,
                name: 'Reed Switch',
                value: 20.0, // Valor atual para este sensor
                status: 'ok',
                history: [19.8, 20.0, 20.2, 20.0] // Histórico de valores anteriores
            },
            {
                id: 2,
                name: 'Pressão Absoluta',
                value: 101.2, // Valor atual para este sensor
                status: 'alerta',
                history: [101.0, 101.1, 101.2, 101.3] // Histórico de valores anteriores
            },
            {
                id: 3,
                name: 'Pressão Diferencial',
                value: 101.5, // Valor fictício atual
                status: 'outro',
                history: [101.0, 101.2, 101.4, 101.5] // Histórico fictício de valores
            },
            {
                id: 4,
                name: 'Acelerômetro',
                value: 0.02, // Valor atual para este sensor
                status: 'alerta',
                history: [0.01, 0.015, 0.02, 0.03] // Histórico de valores anteriores
            },
            {
                id: 5,
                name: 'Temperatura',
                value: 45.1, // Valor atual para este sensor
                status: 'ok',
                history: [42.0, 43.2, 44.7, 45.1] // Histórico de valores anteriores
            },
            {
                id: 6,
                name: 'Strain Gauge',
                value: 123.5, // Valor atual para este sensor
                status: 'outro',
                history: [123.0, 123.2, 123.5, 124.0] // Histórico de valores anteriores
            },
            {
                id: 7,
                name: 'Contador de Ciclos',
                value: 500, // Valor atual para este sensor
                status: 'alerta',
                history: [499, 500, 501, 502] // Histórico de valores anteriores
            },
            {
                id: 8,
                name: 'Qualidade do Ar',
                value: 80.0, // Valor atual para este sensor
                status: 'ok',
                history: [79.8, 80.0, 80.2, 80.3] // Histórico de valores anteriores
            }
        ];
        
        setSensors(simulatedSensors);
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('SensorDetail', { sensor: item })}>
            <View style={styles.card}>
                <Text style={styles.sensorName}>{item.name}</Text>
                <View style={styles.statusContainer}>
                    <Icon
                        name={
                            item.status === 'ok'
                                ? 'check-circle'
                                : item.status === 'alerta'
                                    ? 'alert-circle'
                                    : 'alert'
                        }
                        size={24}
                        color={getStatusColor(item.status)}
                    />
                    <Text style={[styles.status, { color: getStatusColor(item.status) }]}>
                        {item.status === 'ok' ? 'Ok' : item.status === 'alerta' ? 'Alerta' : 'Aviso'}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <FlatList
                    data={sensors}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={styles.contentContainer}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#121C2B',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    container: {
        flex: 1,
        minHeight: '100%', // para garantir rolagem no navegador
        backgroundColor: '#121C2B',
    },
    contentContainer: {
        padding: 10,
        paddingBottom: 30,
    },
    card: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 12,
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Usando boxShadow
        elevation: 3, // Mantido para Android
    },
    sensorName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    status: {
        fontSize: 16,
        marginLeft: 8,
        fontWeight: 'bold',
    },
});