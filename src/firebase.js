import * as firebase from 'firebase';

const config = {
   apiKey: "AIzaSyD68Ksv2vGp6lIfcxOTsDXMersKv4JDsdM",
   authDomain: "loginfire-49626.firebaseapp.com",
   databaseURL: "https://loginfire-49626.firebaseio.com",
   projectId: "loginfire-49626",
   storageBucket: "loginfire-49626.appspot.com",
   messagingSenderId: "723599757505"
 };
 export const firebaseRef = firebase.initializeApp(config);
