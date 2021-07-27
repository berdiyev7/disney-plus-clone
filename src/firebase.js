import firebase from 'firebase';

const firebaseConfig = {
   apiKey: "AIzaSyCfRbIqERsJpkFOj42Shx6d8TbQXl_vvTA",
   authDomain: "disney-plus-clone-f466b.firebaseapp.com",
   projectId: "disney-plus-clone-f466b",
   storageBucket: "disney-plus-clone-f466b.appspot.com",
   messagingSenderId: "180826956627",
   appId: "1:180826956627:web:2d8a608befc0a328acf7a6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GithubAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;