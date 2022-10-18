import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCD1KAJLBPfXzOeiY-2CEpK3PfWnTSp8Rw",
  authDomain: "fire-blog-f2444.firebaseapp.com",
  projectId: "fire-blog-f2444",
  storageBucket: "fire-blog-f2444.appspot.com",
  messagingSenderId: "1008440908741",
  appId: "1:1008440908741:web:6cc90f333803382ba0c9ac"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
export default app;