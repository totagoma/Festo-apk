import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

export default function ExploreScreen({ route, navigation }) {
    const { sensor } = route.params;

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18 }}>{sensor.name}</Text>
            <Text>Valor Atual: {sensor.value}</Text>
            <Text>Status: {sensor.status}</Text>

            <Text style={{ marginTop: 20 }}>Histórico:</Text>
            <FlatList
                data={sensor.history}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => <Text>{item}</Text>}
            />

            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    );
}
