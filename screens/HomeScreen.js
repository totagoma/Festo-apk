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
            { id: 1, name: 'Reed Switch', status: 'ok' },
            { id: 2, name: 'Pressão Absoluta', status: 'alerta' },
            { id: 3, name: 'Pressão Diferencial', status: 'outro' },
            { id: 4, name: 'Acelerômetro', status: 'alerta' },
            { id: 5, name: 'Temperatura', status: 'ok' },
            { id: 6, name: 'Strain Gauge', status: 'outro' },
            { id: 7, name: 'Contador de Ciclos', status: 'alerta' },
            { id: 8, name: 'Qualidade do Ar', status: 'ok' },
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
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
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