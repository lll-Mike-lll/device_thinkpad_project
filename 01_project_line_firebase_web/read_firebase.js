const config = {
  apiKey: "AIzaSyBZW7EVvoJrbEwFviPGFwujMGrwzpAp16k",
  authDomain: "test-firebase-01-73a9d.firebaseapp.com",
  databaseURL: "https://test-firebase-01-73a9d.firebaseio.com",
  projectId: "test-firebase-01-73a9d",
  storageBucket: "test-firebase-01-73a9d.appspot.com",
  messagingSenderId: "1037166017030",
  appId: "1:1037166017030:web:460a85d3430ae6ef852187",
  measurementId: "G-1VPSN78LK8"
};

// var firebase = require("firebase/app");
var firebase = require("firebase");
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

//-------------------------------------------------------------------


function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

// var userId = firebase.auth().currentUser.uid;
// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   // ...
// });

const express = require('express')
// 2. express() เป็นฟังค์ชั่น และ assign ไว้ที่ตัวแปร app
const app = express()
// 3. app เป็น object และมี function ชื่อเดียวกับ HTTP Method ครับ
// ตัวอย่างคือ `.get()` เหมือนกับ GET
app.get('/user/:id', function(req, res) {
  var id = req.params.id
  writeUserData(id,'mike','mike@mail.com','http')
  res.send('<h1>Hello Node.js</h1>'+id)
  console.log('mike_home'+id)
})
// 4. listen() เป็น function คล้ายๆ http module เพื่อเอาไว้ระบุว่า server จะรัน ด้วย port อะไร

app.get('/', function(req, res) {
  // var id = req.params.id
  firebase.database().ref('users/' + 511).on('value',(snap)=>{
      console.log(snap.val());
      res.send(snap.val());
    });
});


app.listen(3000)
console.log('Application is running on port 3000')
