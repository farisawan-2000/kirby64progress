// var ref = firebase.database()
// console.log(ref) // me when i leak my database!!!!!
// console.log(firebase)

const firebaseConfig = {
  apiKey: "AIzaSyBr3jC-jwmknhJJNS6Py8IRRPQhVE3zkdk",
  authDomain: "kirby64progress.firebaseapp.com",
  databaseURL: "https://kirby64progress-default-rtdb.firebaseio.com",
  projectId: "kirby64progress",
  storageBucket: "kirby64progress.appspot.com",
  messagingSenderId: "3532178605",
  appId: "1:3532178605:web:8ff58e74396778f008f224",
  measurementId: "G-Q6KHNQ6XM3"
};

firebase.initializeApp(firebaseConfig);


console.log(firebase.database().ref())
