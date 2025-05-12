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
│   ├── web/cache/production/images/favicon/favicon-24272cdaeff82cc5fac...  → Cache de ícones e imagens do Expo
│   ├── favicon-48.png       → Favicon para o app
│   ├── devices.json         → Configuração de dispositivos
│   └── README.md            → Documentação do Expo
├── assets/                 → Imagens e ícones do app
│   ├── adaptive-icon.png    → Ícone adaptável
│   ├── favicon.png          → Favicon do app
│   ├── icon.png             → Ícone principal
│   └── splash-icon.png      → Ícone para a tela de splash
├── components/             → Componentes reutilizáveis do app
│   ├── Footer.js            → Componente Footer
│   └── Header.js            → Componente Header
├── hooks/                  → Lógicas e hooks reutilizáveis
│   ├── mock/               → Arquivo JSON com dados simulados de sensores
│   │   └── sensors.json     → Dados dos sensores simulados
│   └── useDataFetch.js      → Hook para buscar dados de sensores
├── navigation/             → Controle de navegação entre telas
│   └── AppNavigator.js      → Configuração do Stack Navigator
├── screens/                → Telas principais do app
│   ├── HomeScreen.js        → Tela inicial com lista de sensores
│   ├── ExploreScreen.js     → Tela de exploração (ainda a ser preenchida)
│   └── SensorDetailScreen.js → Tela com detalhes de um sensor
├── services/               → Acesso e manipulação de dados
│   ├── api.js              → Configuração para futuras APIs reais
│   └── dataService.js      → Função que retorna dados simulados de sensores
├── App.js                  → Ponto de entrada do app e configuração do Navigator
├── app.json                → Configuração do Expo (App)
├── index.js                → Ponto de inicialização do app
├── package-lock.json       → Bloqueio de dependências do projeto
├── package.json            → Arquivo de configuração de pacotes e dependências
└── .gitignore              → Arquivo para ignorar arquivos temporários e de build

Funcionalidades Implementadas
Tela Inicial - HomeScreen.js

Exibe uma lista de sensores (dados mockados de sensors.json).

Cada sensor mostra:

Nome

Valor atual

Status (OK/Alerta)

Ao clicar em um sensor, o usuário é levado para a tela de detalhes desse sensor (SensorDetailScreen).

Tela de Detalhes do Sensor - SensorDetailScreen.js

Exibe os detalhes de um sensor específico:

Nome

Valor

Status

Histórico de dados (simulado)

Tela de Exploração - ExploreScreen.js

A tela está criada, mas ainda não foi preenchida com funcionalidades específicas. Este espaço está reservado para exibir mais detalhes analíticos ou gráficos de sensores no futuro.

Navegação

Utilizando o React Navigation:

HomeScreen: Lista de sensores.

SensorDetailScreen: Detalhamento dos sensores.

ExploreScreen: (Futuramente preenchido).

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
