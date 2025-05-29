// FirebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCRP2Q4i6nikFRAMmtsHuavv8PoFt7pfzk",
  authDomain: "mndzfx-7b675.firebaseapp.com",
  projectId: "mndzfx-7b675",
  storageBucket: "mndzfx-7b675.firebasestorage.app",
  messagingSenderId: "922059927536",
  appId: "1:922059927536:web:0369cad0a5fe0c41e13735",
  measurementId: "G-JZ5TPJ6BH1"
};

const app = initializeApp(firebaseConfig);  // Inisialisasi Firebase
const auth = getAuth(app);  // Ambil objek auth untuk digunakan di seluruh aplikasi

export { auth };