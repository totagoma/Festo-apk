// screens/RegisterScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function RegisterScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Lógica para cadastro (aqui podemos apenas simular)
        if (name && email && password) {
            alert('Cadastro realizado com sucesso!');
            navigation.replace('Home');  // Navega para a tela principal após cadastro
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela de Cadastro</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Cadastrar" onPress={handleRegister} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#121C2B',
    },
    title: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        marginBottom: 15,
        paddingLeft: 10,
        color: '#fff',
    },
});

export default RegisterScreen;
