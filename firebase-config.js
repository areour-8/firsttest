// مقادیر زیر رو از تنظیمات پروژه Firebase خودتون کپی کنید
const firebaseConfig = {
  apiKey: "AIzaSyDCPLcKK-GiAnjFT3rdYo1BWLC6prSzkak",
  authDomain: "areour-8.firebaseapp.com",
  projectId: "areour-8",
  storageBucket: "areour-8.appspot.com",
  messagingSenderId: "640507345458",
  appId: "1:640507345458:web:65e712e036b0756d10da2b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
