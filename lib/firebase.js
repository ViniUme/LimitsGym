import firebase from "firebase/app";
import "firebase/auth";

if (!firebase.app.length){
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOAUTH,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    })
}

export default firebase;