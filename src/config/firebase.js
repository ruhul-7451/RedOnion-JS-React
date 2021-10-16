import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCyjQL3_AvkBlpHv0mRMdxSBv8pSLLTkbo",
    authDomain: "redonion-react-js.firebaseapp.com",
    projectId: "redonion-react-js",
    storageBucket: "redonion-react-js.appspot.com",
    messagingSenderId: "265451771514",
    appId: "1:265451771514:web:917be6645219fb6beccdc3"
};

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig)
}

export default initializeAuthentication;