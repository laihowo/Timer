// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDcrh1txFb-yI1f3GBv7RTRL9u2fyQoIxQ",
  authDomain: "laihowo.firebaseapp.com",
  databaseURL: "https://laihowo.firebaseio.com",
  projectId: "laihowo",
  storageBucket: "laihowo.appspot.com",
  messagingSenderId: "359730113805",
  appId: "1:359730113805:web:d9172f16137edb5542d444",
  measurementId: "G-ZW4PTY20G0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
