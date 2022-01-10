// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
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
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name+ "!";


function addRoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name - " + Room_names);
 row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
 document.getElementById("output").innerHTML+=row;
 //End code
 });});}
getData();

function redirectToRoomName(name) {
 console.log(name);
 localStorage.setItem("room_name", name);

}