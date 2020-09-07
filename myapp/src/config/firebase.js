// import app from 'firebase/app';
import * as app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAkg6vn7Gnz88NLwPvebc4IUC2R2CaZBJU",
    authDomain: "oddam-w-dobre-rece-react.firebaseapp.com",
    databaseURL: "https://oddam-w-dobre-rece-react.firebaseio.com",
    projectId: "oddam-w-dobre-rece-react",
    storageBucket: "oddam-w-dobre-rece-react.appspot.com",
    messagingSenderId: "425976631309",
    appId: "1:425976631309:web:b927c9fc0d9e4b274c0544"
};


class Firebase {
    constructor() {
        // Initialize Firebase
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.firestore()
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    logout() {
        return this.auth.signOut()
    }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName
    }
}

export default new Firebase();
