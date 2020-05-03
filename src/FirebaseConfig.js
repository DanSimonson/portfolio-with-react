import firebase from "firebase";

const Config = {
  apiKey: "AIzaSyAC-OWZxE2n-1m-7nooBzhJM9iYr0j27q8",
  authDomain: "mariposaweb-a653a.firebaseapp.com",
  databaseURL: "https://mariposaweb-a653a.firebaseio.com",
  projectId: "mariposaweb-a653a",
  storageBucket: "mariposaweb-a653a.appspot.com",
  messagingSenderId: "144317247544",
  appId: "1:144317247544:web:c9a4e249b3f0c75be1b6cd",
  measurementId: "G-HGSZ2CMQJD",
};

const firebaseApp = firebase.initializeApp(Config);

export { firebaseApp };
