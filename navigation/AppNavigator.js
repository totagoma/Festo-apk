import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import SensorDetailScreen from '../screens/SensorDetailScreen';
import ExploreScreen from '../screens/ExploreScreen';
import LoginScreen from '../screens/LoginScreen';  // Tela de Login
import RegisterScreen from '../screens/RegisterScreen';  // Tela de Cadastro

const Stack = createStackNavigator();

// Configurações compartilhadas
const globalScreenOptions = {
    headerStyle: {
        backgroundColor: '#121C2B', // Cor do cabeçalho
        elevation: 0, // Remove sombra no Android
        shadowOpacity: 0, // Remove sombra no iOS
    },
    headerTintColor: '#FFFFFF', // Cor dos ícones e texto
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    headerBackTitleVisible: false, // Remove texto "Voltar" no iOS
};

export default function AppNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Login"  // Tela de login é a inicial
            screenOptions={globalScreenOptions}
        >
            {/* Tela de Login */}
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    title: 'Login',
                    headerShown: false,  // Não exibe o cabeçalho na tela de login
                }}
            />

            {/* Tela de Cadastro */}
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{
                    title: 'Cadastro',
                    headerShown: false,  // Não exibe o cabeçalho na tela de cadastro
                }}
            />

            {/* Tela Principal */}
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Monitoramento Industrial Festo',
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: 15 }}
                            onPress={() => console.log('Menu pressionado')}
                        >
                            <Icon name="menu" size={26} color="#FFFFFF" />
                        </TouchableOpacity>
                    ),
                }}
            />

            {/* Tela de Detalhes do Sensor */}
            <Stack.Screen
                name="SensorDetail"
                component={SensorDetailScreen}
                options={({ route }) => ({
                    title: route.params?.sensor?.name || 'Detalhes',
                    headerBackImage: () => (
                        <Icon name="arrow-back" size={26} color="#FFFFFF" />
                    ),
                })}
            />

            {/* Tela de Exploração */}
            <Stack.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    title: 'Análise de Dados',
                    headerLeft: () => (
                        <TouchableOpacity
                            style={{ marginLeft: 15 }}
                            onPress={() => console.log('Fechar análise')}
                        >
                            <Icon name="close" size={26} color="#FFFFFF" />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack.Navigator>
    );
}
