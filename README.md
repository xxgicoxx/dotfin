# DotFin
DotFin é um aplicativo para controle financeiro desenvolvido em Ionic Framework que utiliza o Firebase como back-end e foi feito para atender algumas necessidades minhas. Espero que ele seja útil para você também.

### Funcionalidades
* Autenticação Firebase 🔥
* Verificação de e-mail 📧
* Recuperação de senha 🔑
* Criação de grupos 👨‍👩‍👧‍👦
* Lançamento de contas/despesas 💸
* Lançamento de descontos 💲
* Lançamento de cobranças para outros usuários do grupo 🤑

<p float="left">
  <img src="https://i.imgur.com/3xeY42t.jpg" width="200" />
  <img src="https://i.imgur.com/hEVMROP.jpg" width="200" /> 
  <img src="https://i.imgur.com/tSiJzg6.jpg" width="200" />
  <img src="https://i.imgur.com/YHUqzjh.jpg" width="200" />
  <img src="https://i.imgur.com/piZqEMi.jpg" width="200" />
  <img src="https://i.imgur.com/eV86eIn.jpg" width="200" />
</p>

#

### Requisitos
* [Node.js](https://nodejs.org/en/)
* [Ionic Framework](https://ionicframework.com/)
* [Firebase CLI](https://firebase.google.com/docs/functions/get-started)
* [Android Studio](https://developer.android.com/studio)

### Firebase Authentication
* Crie um novo projeto no [Firebase](https://console.firebase.google.com/)
* Acesse o projeto criado
* No menu, acesse 'Authentication > Sign-in method'
* Ative o método 'E-mail/senha'

### Cloud Firestore
* No menu, acesse 'Cloud Firestore'
* Clique em 'Criar banco de dados'
* Marque a opção 'Iniciar no modo de produção'
* Acesse a aba 'Regras'
* Acesse o diretório raiz do projeto, abra o arquivo [firestore.rules](firestore.rules) e copie todo seu conteúdo
* Substitua todo o conteúdo da aba 'Regras' pelo conteúdo copiado
* Clique em 'Publicar'

### Cloud Functions
* Instale o [Firebase CLI](https://firebase.google.com/docs/functions/get-started)
* Acesse o diretório 'functions/dotfin'
* Execute `firebase use --add`
* Selecione o projeto criado no primeiro passo
* Execute `firebase deploy`

### Aplicativo
* Acesse 'Configurações do projeto'
* Vá até 'Seus aplicativos'
* Selecione a opção 'Web'
* Siga os passos solicitados
* No final, copie o conteúdo do 'firebaseConfig' gerado pelo Firebase 
* Acesse a pasta raiz do projeto e execute `npm install`
* Acesse o diretório 'src/environments' e abra o arquivo [environment.ts](src/environments/environment.ts)
* Substitua o 'firebaseConfig' pelo 'firebaseConfig' gerado nos passos anteriores

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

### Executando na Web
* Execute `npm run start`
* Acessse o endereço [http://localhost:8100](http://localhost:8100)

### Executando no Android
* Execute `npm run build`
* Execute `npm run open`
* Após abrir o Android Studio, selecione o dispositivo/emulador e clique em 'Run'

### Desenvolvimento
* [Node.js](https://nodejs.org/en/)
* [Ionic Framework 5](https://ionicframework.com/)
* [Capacitor](https://capacitorjs.com/)
* [Firebase Authentication](https://firebase.google.com/)
* [Cloud Firestore](https://firebase.google.com/)
* [Cloud Functions](https://firebase.google.com/)
* [TSLint](https://palantir.github.io/tslint/)

### Desenvolvedores
* [Giovani](https://github.com/xxgicoxx)

### Agradecimentos
* [FlatIcon](https://www.flaticon.com/)