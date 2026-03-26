// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPkKCdaDKOmEmuIHGj12_qvmtSzRP6sj8",
  authDomain: "projetos2026-1.firebaseapp.com",
  projectId: "projetos2026-1",
  storageBucket: "projetos2026-1.firebasestorage.app",
  messagingSenderId: "922992208079",
  appId: "1:922992208079:web:9556731d7a3b392fb66fba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };