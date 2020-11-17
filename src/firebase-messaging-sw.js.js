importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/7.20.0/init.js');
firebase.initializeApp({
    apiKey: "AIzaSyAl5r6sWN10V-mzHev6GVwaddh82PDrmLw",
    authDomain: "baby-4428e.firebaseapp.com",
    databaseURL: "https://baby-4428e.firebaseio.com",
    projectId: "baby-4428e",
    storageBucket: "baby-4428e.appspot.com",
    messagingSenderId: "384652436267",
    appId: "1:384652436267:web:0d96306e91f58e8db8db6e",
    measurementId: "G-28XQS1RLSZ"
});
const messaging = firebase.messaging();