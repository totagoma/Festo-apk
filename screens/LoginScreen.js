// Modificação na tela de Login para adicionar a navegação para Cadastro

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === '1234') {
            navigation.replace('Home');
        } else {
            alert('Credenciais inválidas!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela de Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Usuário"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Entrar" onPress={handleLogin} />

            {/* Botão para navegação até a tela de cadastro */}
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerText}>Ainda não tem uma conta? Cadastre-se</Text>
            </TouchableOpacity>
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
    registerText: {
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
        textDecorationLine: 'underline',
    },
});

export default LoginScreen;
