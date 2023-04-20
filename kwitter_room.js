const firebaseConfig = {
    apiKey: "AIzaSyDyi_xzJnWxoOCzOGohYguKWQOfrln-p0o",
    authDomain: "kwitter-3c7e0.firebaseapp.com",
    databaseURL: "https://kwitter-3c7e0-default-rtdb.firebaseio.com",
    projectId: "kwitter-3c7e0",
    storageBucket: "kwitter-3c7e0.appspot.com",
    messagingSenderId: "925378265355",
    appId: "1:925378265355:web:1ef09c02e38b69d6c6e20e",
    measurementId: "G-84HFTYEEW7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome  " + user_name + "!";
  
  
  
  
  
  
  function addRoom() {
    
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
  
    window.location = "kwitter_page.html";
  }
  
  function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }
  
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }
  