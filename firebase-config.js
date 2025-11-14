// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBdV0sWvBVy565Xpgqayxc7SBrc8uDtcXQ",
    authDomain: "wedding-planner-39b5b.firebaseapp.com",
    projectId: "wedding-planner-39b5b",
    storageBucket: "wedding-planner-39b5b.appspot.com",
    messagingSenderId: "266193524534",
    appId: "1:266193524534:web:b5266631f8052d65704597"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };