// Importando o SDK do Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAmRtt_xciWlYO7uHG6vkTmEVAzdOrjWa0",
  authDomain: "cajuchat-ac6bd.firebaseapp.com",
  projectId: "cajuchat-ac6bd",
  storageBucket: "cajuchat-ac6bd.firebasestorage.app",
  messagingSenderId: "470171931347",
  appId: "1:470171931347:web:d88707593230809b21ba26"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando os serviços necessários
const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);

// Exportando as referências
export { auth, firestore, database };
