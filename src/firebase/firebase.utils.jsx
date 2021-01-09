import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDbjIPSTkGqH-HK4HP2gZd4rBcxgnON63E",
    authDomain: "fashion-touchee.firebaseapp.com",
    projectId: "fashion-touchee",
    storageBucket: "fashion-touchee.appspot.com",
    messagingSenderId: "407753798541",
    appId: "1:407753798541:web:b09608ce0a3590d87cc3c4",
    measurementId: "G-J3LXY8BH0F"
  };


firebase.initializeApp(config);
export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if(!snapshot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err){
      console.log('error creating user', err.message);
    }
  }
  return userRef;
}

export const firestore = firebase.firestore();
export const auth = firebase.auth();



const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
