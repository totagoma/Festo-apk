FESTO-APK - Aplicativo Frontend de Monitoramento de Sensores
Este aplicativo é parte de um desafio de monitoramento de sensores de um sistema pneumático, focado no uso de um Digital Twin. A aplicação foi construída utilizando React Native com Expo, e o objetivo é exibir dados de sensores em tempo real e permitir a navegação entre uma lista de sensores e o detalhamento de seus históricos de dados.

Tecnologias Usadas
React Native (com Expo)

React Navigation para navegação entre telas

Axios para requisições HTTP (ou uso de mocks)

Recharts/Victory Native para gráficos (opcional, a ser implementado)

JSON para simulação de dados de sensores

Estrutura do Projeto:
FESTO-APK/
├── expo/                   → Elementos específicos do Expo
│   ├── web/cache/production/images/favicon/favicon-24...  → Cache de ícones
│   ├── favicon-48.png       → Favicon adicional
│   ├── devices.json         → Configuração de dispositivos
│   └── README.md            → Documentação do Expo
│
├── assets/                 → Recursos estáticos
│   ├── adaptive-icon.png    → Ícone adaptável
│   ├── favicon.png          → Favicon do app
│   ├── icon.png             → Ícone principal
│   └── splash-icon.png      → Ícone para splash screen
│
├── components/             → Componentes reutilizáveis
│   ├── Footer.js            → Componente Footer
│   ├── Header.js            → Componente Header
│   └── SensorCard.js        → Card de sensores (adicionado)
│
├── festo-backend/          → Backend da aplicação
│   ├── controllers/        → Lógica CRUD dos sensores
│   │   └── sensorController.js    → Lógica CRUD dos sensores
│   ├── mock/               → Dados mockados para testes
│   │   └── sensors.json    → Dataset para testes
│   ├── routes/             → Endpoints da API
│   │   ├── sensorRoutes.js  → Endpoints /sensors
│   │   └── index.js       → Centraliza as rotas
│   ├── index.js            → Ponto de entrada da API (config. Express)
│   └── package.json        → Dependências e scripts
│
├── hooks/                  → Hooks do frontend
│   ├── mock/               → Dados mockados para frontend
│   │   └── sensors.json    → Dados mockados
│   └── useDataFetch.js     → Hook para requisições API
│
├── navigation/             → Navegação do app
│   └── AppNavigator.js     → Configuração do Stack Navigator
│
├── screens/                → Telas do aplicativo
│   ├── HomeScreen.js       → Tela de lista de sensores
│   ├── ExploreScreen.js    → Tela de exploração (ainda em desenvolvimento)
│   ├── LoginScreen.js      → Tela de autenticação (adicionado)
│   ├── RegisterScreen.js   → Tela de cadastro (adicionado)
│   └── SensorDetailScreen.js → Tela de detalhes do sensor
│
├── services/               → Serviços de backend
│   ├── api.js             → Configuração da API
│   └── dataService.js     → Manipulação de dados
│
├── App.js                  → Ponto de entrada do app
├── app.json                → Configuração do Expo
├── index.js                → Inicialização
├── package-lock.json       → Dependências travadas
├── package.json            → Configuração do projeto
└── .gitignore              → Arquivos ignorados


Funcionalidades Implementadas
Tela Inicial - HomeScreen.js
Exibe uma lista de sensores com dados mockados.

Cada sensor mostra:

Nome

Valor atual

Status (OK/Alerta)

Ao clicar em um sensor, o usuário é levado para a tela de detalhes.

Tela de Detalhes do Sensor - SensorDetailScreen.js
Exibe os detalhes de um sensor específico:

Nome

Valor

Status

Histórico de dados (simulado)

Tela de Exploração - ExploreScreen.js
Esta tela está reservada para futuras funcionalidades analíticas.

Gráficos e análises avançadas dos sensores serão implementados futuramente.

Login e Cadastro
LoginScreen.js: Tela de autenticação para os usuários (adicionada recentemente).

RegisterScreen.js: Tela de registro de novos usuários (adicionada recentemente).

Navegação
HomeScreen: Lista de sensores.

SensorDetailScreen: Detalhamento dos sensores.

ExploreScreen: (Futuramente preenchido com gráficos e análises).

LoginScreen & RegisterScreen: Tela de autenticação e cadastro.



Como Rodar o Projeto
Pré-requisitos
Certifique-se de ter o Node.js e o Expo CLI instalados na sua máquina. Se ainda não os tiver, siga os seguintes passos:

Instale o Node.js

Instale o Expo CLI:
npm install -g expo-cli

Passo 1: Clonando o Repositório:
git clone https://github.com/totagoma/FESTO-APK.git
cd FESTO-APK

Passo 2: Instalando Dependências
Dentro do diretório do projeto, execute o comando:
npm install

Passo 3: Iniciando o Expo
Inicie o projeto com o Expo, utilizando o comando:
expo start

      Isso abrirá uma interface no navegador com um QR Code, o qual você pode escanear usando o app Expo Go (disponível para Android e iOS). Caso prefira, pode rodar diretamente no emulador de sua escolha.

      Como Testar
      Tela Inicial (HomeScreen): Exibe uma lista de sensores com nome, valor e status. Clicar em qualquer item levará o usuário à tela de detalhes.

      Tela de Detalhes (SensorDetailScreen): Mostra detalhes sobre um sensor, incluindo um histórico de dados.

      Tela de Exploração (ExploreScreen): A tela está reservada para futuras funcionalidades analíticas.

      Estrutura dos Dados (Mock)
      hooks/mock/sensors.json



[
  {
    "id": 1,
    "name": "Sensor de Pressão",
    "value": "75 PSI",
    "status": "OK",
    "history": [72, 74, 75, 77]
  },
  {
    "id": 2,
    "name": "Sensor de Temperatura",
    "value": "23°C",
    "status": "Alerta",
    "history": [22, 23, 24, 25]
  }
]

A atualização reflete a alteração na tela ExploreScreen (ainda em desenvolvimento), o uso de gráficos futuros e a manutenção do botão "Atualizar" na tela de detalhes, aguardando um melhor entendimento de sua utilidade.
