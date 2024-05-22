# React Native Cronômetro

Este é um aplicativo de cronômetro desenvolvido com React Native. O aplicativo permite que os usuários iniciem, pausem e reiniciem um temporizador, além de salvar a última corrida após o temporizador ser limpo.

## Funcionalidades

- **Iniciar/Pausar Cronômetro**: Permite ao usuário iniciar e pausar o cronômetro.
- **Reiniciar Cronômetro**: Permite ao usuário reiniciar o cronômetro para zero.
- **Salvar Última Corrida**: Armazena a duração da última corrida ao limpar o temporizador.
- **Exibir Última Corrida**: Mostra a duração da última corrida salva.

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)

## Instalação

Siga as instruções abaixo para configurar e executar o aplicativo localmente.

### Pré-requisitos

- Node.js
- npm ou yarn
- Expo CLI (se estiver usando Expo)

### Passos

1. Clone este repositório:

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. Instale as dependências:

    ```bash
    npm install
    # ou
    yarn install
    ```

3. Execute o aplicativo:

    Se estiver usando Expo:

    ```bash
    expo start
    ```

    Para react-native-cli:

    ```bash
    npx react-native run-android
    # ou
    npx react-native run-ios
    ```

## Como Usar

1. Abra o aplicativo no seu dispositivo ou emulador.
2. Pressione o botão "Iniciar" para começar o cronômetro.
3. Pressione o botão "Pausar" para pausar o cronômetro.
4. Pressione o botão "Reiniciar" para zerar o cronômetro.
5. A última corrida será salva e exibida após limpar o temporizador.

## Estrutura do Código

Abaixo está uma breve descrição da estrutura do código do aplicativo:

```plaintext
├── App.js              # Componente principal do aplicativo
├── components          # Componentes reutilizáveis
│   ├── Timer.js        # Componente do cronômetro
│   └── LastRun.js      # Componente que exibe a última corrida
├── utils               # Funções utilitárias e helpers
│   └── storage.js      # Funções para salvar e recuperar dados do AsyncStorage
├── assets              # Imagens e outros recursos estáticos
└── styles              # Estilos do aplicativo
    └── styles.js       # Arquivo de estilos principal
