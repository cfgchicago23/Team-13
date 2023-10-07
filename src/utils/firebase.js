// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "t13-cfg-23.firebaseapp.com",
  projectId: "t13-cfg-23",
  storageBucket: "t13-cfg-23.appspot.com",
  messagingSenderId: "391712736823",
  appId: "1:391712736823:web:50486090f560b01137e1b2"
};

const initFirebaseApp = () => {
  return getApps().length == 0 ? initializeApp(firebaseConfig) : getApp()
}

const getFirebaseStore = () => {
  const app = initFirebaseApp()
  return getFirestore(app)
}

const getFirebaseAuth = () => {
  const app = initFirebaseApp()
  return getAuth(app)
}

const signUp = async (email, password) => {
  const auth = getFirebaseAuth()
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    return user
  }
  catch (e) {
    return null
  }

}

const signIn = async (email, password) => {
  const auth = getFirebaseAuth()
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    return user
  }
  catch (e) {
    return null
  }

}

export { initFirebaseApp, getFirebaseStore, signUp, signIn }