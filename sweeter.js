// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1LmUIjhdr63z_7EonUg7eyAfLI9vfQgQ",
    authDomain: "chatapp-590f6.firebaseapp.com",
    databaseURL: "https://chatapp-590f6-default-rtdb.firebaseio.com",
    projectId: "chatapp-590f6",
    storageBucket: "chatapp-590f6.appspot.com",
    messagingSenderId: "1053423485655",
    appId: "1:1053423485655:web:d76bdf16ebe6e064b02692",
    measurementId: "G-Z149Z9KX3G"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}