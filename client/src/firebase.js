import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB9z5DcSqJeQhN5_fLWx-fpDTnJIx_RzZk",
    authDomain: "react-blog-32a85.firebaseapp.com",
    projectId: "react-blog-32a85",
    storageBucket: "react-blog-32a85.appspot.com",
    messagingSenderId: "949536099008",
    appId: "1:949536099008:web:b9209946fac77986b8bb25"
};

firebase.initializeApp(firebaseConfig);

export default firebase;