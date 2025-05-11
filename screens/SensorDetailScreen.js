import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default function SensorDetailScreen({ route, navigation }) {
    const { sensor } = route.params;
    const mockHistory = sensor.history || [12, 15, 14, 13, 16]; // Histórico simulado

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>{sensor.name}</Text>
            <Text>Status: {sensor.status}</Text>
            <Text>Valor atual: {sensor.value}</Text>

            <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Histórico:</Text>
            <FlatList
                data={mockHistory}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => <Text>- {item}</Text>}
            />

            <Button title="Atualizar" onPress={() => { }} />

            <View style={{ marginTop: 10 }}>
                <Button
                    title="Explorar"
                    onPress={() => navigation.navigate('Explore', { sensor })}
                />
            </View>
        </View>
    );
}
