# DotFin
DotFin é um aplicativo para controle financeiro desenvolvido em Ionic Framework que utiliza o Firebase como back-end e foi feito para atender algumas necessidades minhas. Espero que ele seja útil para você também.

<p float="left">
  <img src="https://i.imgur.com/3xeY42t.jpg" width="200" />
  <img src="https://i.imgur.com/hEVMROP.jpg" width="200" /> 
  <img src="https://i.imgur.com/tSiJzg6.jpg" width="200" />
  <img src="https://i.imgur.com/YHUqzjh.jpg" width="200" />
  <img src="https://i.imgur.com/piZqEMi.jpg" width="200" />
  <img src="https://i.imgur.com/eV86eIn.jpg" width="200" />
</p>

# Funcionalidades
* Autenticação Firebase 🔥
* Verificação de e-mail 📧
* Recuperação de senha 🔑
* Criação de grupos 👨‍👩‍👧‍👦
* Lançamento de contas/despesas 💸
* Lançamento de descontos 💲
* Lançamento de cobranças para outros usuários do grupo 🤑
* i18n 💬

# Pré-requisitos
* [Node.js](https://nodejs.org/en/)
* [Ionic Framework](https://ionicframework.com/)
* [Firebase CLI](https://firebase.google.com/docs/functions/get-started)
* [Android Studio](https://developer.android.com/studio)

# Executando
### 1. Firebase Authentication
````
# Novo projeto
Crie um novo projeto no Firebase através do link https://console.firebase.google.com/.

# Acesse
Acesse o projeto criado.

# Defina o método de acesso
No menu, acesse 'Authentication > Sign-in method' e ative o método 'E-mail/senha'.
````

### 2. Cloud Firestore
````
# Crie um novo banco de dados
No menu, acesse 'Cloud Firestore', clique em 'Criar banco de dados', marque a opção 'Iniciar no modo de produção'.

# Defina as regras
Acesse a aba 'Regras', depois acesse o diretório raiz do projeto, abra o arquivo 'firestore.rules' e copie todo seu conteúdo, substitua todo o conteúdo da aba 'Regras' pelo conteúdo copiado e clique em 'Publicar'.
````

### 3. Cloud Functions
````
# Instale
Instale o Firebase CLI seguindo as instruções do link https://firebase.google.com/docs/functions/get-started.

# Publique a função
Acesse o diretório 'functions/dotfin', execute `firebase use --add`, selecione o projeto criado no primeiro passo e execute `firebase deploy`.
````

### 4. Aplicativo
````
# Configure o projeto Firebase
Acesse 'Configurações do projeto', vá até 'Seus aplicativos', selecione a opção 'Web' e siga os passos solicitados.

# Configure o aplicativo
Ao final do passo anterior, copie o conteúdo do 'firebaseConfig' gerado pelo Firebase. Acesse a pasta raiz do projeto e execute `npm install`, depois, acesse o diretório 'src/environments' e abra o arquivo src/environments/environment.ts e substitua o 'firebaseConfig' pelo 'firebaseConfig' gerado anteriormente.
````

### Exemplo de um 'firebaseConfig' gerado pelo Firebase
````json
firebaseConfig = {
  "apiKey": "XXXXXXXXXXXXXXXXXXXXXX_XXXXXX_XXXXXXXXX",
  "authDomain": "XXXXX-00000.firebaseapp.com",
  "databaseURL": "https://XXXXX-00000.firebaseio.com",
  "projectId": "XXXXX-00000",
  "storageBucket": "XXXXX-00000.appspot.com",
  "messagingSenderId": "000000000000",
  "appId": "0:000000000000:web:0x00x000x0000x00xx0000",
  "measurementId": "G-XXXXXXXXXX"
};
```` 

### 5. Executando na Web
```` 
# Inicialize
npm run start

# Acesse
Acessse pelo endereço [http://localhost:8100](http://localhost:8100).
```` 

### 6. Executando no Android
```` 
# Construa
npm run build

# Inicialize
Execute `npm run open` e após abrir o Android Studio, selecione o dispositivo/emulador e clique em 'Run'.
```` 

# Construído com
* [Node.js](https://nodejs.org/en/)
* [Ionic Framework 5](https://ionicframework.com/)
* [Capacitor](https://capacitorjs.com/)
* [Firebase Authentication](https://firebase.google.com/)
* [Cloud Firestore](https://firebase.google.com/)
* [Cloud Functions](https://firebase.google.com/)
* [TSLint](https://palantir.github.io/tslint/)

# Desenvolvedores
* [Giovani](https://github.com/xxgicoxx)

# Agradecimentos
* [FlatIcon](https://www.flaticon.com/)