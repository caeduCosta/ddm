# Implementação de Funcionalidades no Aplicativo de Chat

## Integrantes: Carlos Eduardo, Ana Julia e Ana Beatriz Almeida

## Objetivo

O objetivo deste projeto é implementar funcionalidades específicas em um aplicativo de chat. A funcionalidade obrigatória, **envio de imagens**, foi parcialmente implementada. Além disso, uma funcionalidade adicional, **indicação de "usuário digitando" em tempo real**, foi implementada para aprimorar a experiência do usuário.

### Tecnologias Utilizadas

- **React Native** com Expo para o desenvolvimento móvel.
- **TailwindCSS** (via NativeWind) para estilização.
- **Firebase** (Firestore e Storage) para o backend.

## Funcionalidades Implementadas

### 1. Envio de Imagens (Funcionalidade Obrigatória)

- A funcionalidade inclui:
  - Seleção de imagens diretamente da galeria do dispositivo.
  - Integração com o **Firebase Storage** para upload das imagens.
  - Exibição da URL da imagem dentro do chat.

- **Limitações**: A funcionalidade não foi totalmente implementada devido a alterações nas permissões do Firebase Storage. Para completar o envio de imagens, são necessárias configurações avançadas no Firebase.

### 2. Indicação de "Usuário Digitando" em Tempo Real (Funcionalidade Adicional)

- Implementação de um indicador que mostra quando um usuário está digitando uma mensagem, proporcionando uma experiência mais interativa e dinâmica.
- A comunicação entre os usuários se torna mais fluída, pois é possível perceber o momento em que alguém está prestes a enviar uma mensagem.

## Instruções de Uso

### Pré-requisitos

1. Instalar o [Expo Go](https://expo.dev/client) no dispositivo móvel.
2. Clonar este repositório:

   ```
   git clone https://github.com/
   ```

3. Instalar as dependências do projeto:

   ```
   npm install
   ```

4. Iniciar o projeto:

   ```
   npm start
   ```

## Testando o APK

- Link para o [APK](). 