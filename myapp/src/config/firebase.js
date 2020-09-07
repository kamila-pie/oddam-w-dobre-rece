import * as firebase from 'firebase/app';
import 'firebase/auth';


const app = firebase.initializeApp({
    apiKey: "AIzaSyAkg6vn7Gnz88NLwPvebc4IUC2R2CaZBJU",
    authDomain: "oddam-w-dobre-rece-react.firebaseapp.com",
    databaseURL: "https://oddam-w-dobre-rece-react.firebaseio.com",
    projectId: "oddam-w-dobre-rece-react",
    storageBucket: "oddam-w-dobre-rece-react.appspot.com",
    messagingSenderId: "425976631309",
    appId: "1:425976631309:web:b927c9fc0d9e4b274c0544"
    // apiKey: process.env.REACT_APP_FIREBASE_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export default app;

// const firebaseConfig = {
//     apiKey: "AIzaSyAkg6vn7Gnz88NLwPvebc4IUC2R2CaZBJU",
//     authDomain: "oddam-w-dobre-rece-react.firebaseapp.com",
//     databaseURL: "https://oddam-w-dobre-rece-react.firebaseio.com",
//     projectId: "oddam-w-dobre-rece-react",
//     storageBucket: "oddam-w-dobre-rece-react.appspot.com",
//     messagingSenderId: "425976631309",
//     appId: "1:425976631309:web:b927c9fc0d9e4b274c0544"
// };

// const Fire = app.initializeApp(firebaseConfig);
//
//
// class Firebase {
//     constructor() {
//         // Initialize Firebase
//         app.initializeApp(firebaseConfig);
//         this.auth = app.auth();
//         this.db = app.firestore()
//     }
//
//     login(email, password) {
//         return this.auth.signInWithEmailAndPassword(email, password)
//     }
//
//     logout() {
//         return this.auth.signOut()
//     }
//
//     async register(name, email, password) {
//         await this.auth.createUserWithEmailAndPassword(email, password)
//         return this.auth.currentUser.updateProfile({
//             displayName: name
//         })
//     }
//
//     isInitialized() {
//         return new Promise(resolve => {
//             this.auth.onAuthStateChanged(resolve)
//         })
//     }
//
//     getCurrentUsername() {
//         return this.auth.currentUser && this.auth.currentUser.displayName
//     }
// }
//
// // export default new Firebase();
// export default Fire;
