 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyC4vgC3pyEWRJBfz8LZOsTMXf8o-P2EfWA",
  authDomain: "school-attendance-app-93c0a.firebaseapp.com",
  databaseURL: "https://school-attendance-app-93c0a-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-93c0a",
  storageBucket: "school-attendance-app-93c0a.appspot.com",
  messagingSenderId: "1080834167545",
  appId: "1:1080834167545:web:c68c5e6974b9bd84634828"
};

if (!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig)
}

  export default firebase.database()
 

  