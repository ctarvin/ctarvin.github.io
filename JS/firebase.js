// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js"
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    onSnapshot,
    doc,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqsee7it52esZCbm-jaZBGomelsyC7SjM",
    authDomain: "ta-ticket-system.firebaseapp.com",
    projectId: "ta-ticket-system",
    storageBucket: "ta-ticket-system.appspot.com",
    messagingSenderId: "166337458068",
    appId: "1:166337458068:web:66a842b2ceab56e1f5e981",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore()

export const saveTask = (name, email, date, course, professor, description) =>
    addDoc(collection(db, "tasks"), {
        name: name,
        email: email,
        date: date,
        course: course,
        professor: professor,
        description: description,
    })

export const getTasks = () => getDocs(collection(db, "tasks"))

export const onGetTasks = (callback) => onSnapshot(collection(db, "tasks"), callback)

export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id))
