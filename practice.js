
var firebaseConfig = {
    apiKey: "AIzaSyAafy76Fhphphe-3VdMb6y83TtpYoPXD4A",
    authDomain: "kwitter-16a26.firebaseapp.com",
    databaseURL: "https://kwitter-16a26-default-rtdb.firebaseio.com/",
    projectId: "kwitter-16a26",
    storageBucket: "kwitter-16a26.appspot.com",
    messagingSenderId: "1089796239794",
    appId: "1:1089796239794:web:1eca3953b36a446d8df4ab"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function adduser(){

user_name = document.getElementById("user_name").value;

firebase.database().ref("/").child(user_name).update({
    purpose: "adding user"
});


}