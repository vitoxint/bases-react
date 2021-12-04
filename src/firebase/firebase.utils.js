//import firebase from "firebase/app";
import firebase from "firebase/compat/app"
import "firebase/firestore"; // functions
import "firebase/auth"; // authentication

// config
const config = {
    apiKey: "AIzaSyCq4l8uGwDQcANQCGZhnARuAP-S6kLzFoU",
    authDomain: "bases-react-nov-846d1.firebaseapp.com",
    projectId: "bases-react-nov-846d1",
    storageBucket: "bases-react-nov-846d1.appspot.com",
    messagingSenderId: "196709008631",
    appId: "1:196709008631:web:58bd61a117e80bc8b2bff2"

};

// create my web app with firebase
firebase.initializeApp(config);

// function for create-documents
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uuid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

// exports
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// providers
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;