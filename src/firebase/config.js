import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAD04Vw51SJeopHigQ3zwJqtDlYxxb1mMk",
    authDomain: "budget-planner-bfac8.firebaseapp.com",
    projectId: "budget-planner-bfac8",
    storageBucket: "budget-planner-bfac8.appspot.com",
    messagingSenderId: "591795916182",
    appId: "1:591795916182:web:2fb4642dc59483281ca1b7"
};

// init firebase
initializeApp(firebaseConfig);

// init service
const db = getFirestore()

// init firebase auth
const auth = getAuth()

export { db, auth }