import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC-i2jFd22bYdBwRpVoyd6tt5ycJ9HvmYQ',
  authDomain: 'yevhen-d9b2b.firebaseapp.com',
  projectId: 'yevhen-d9b2b',
  storageBucket: 'yevhen-d9b2b.appspot.com',
  messagingSenderId: '1022606318990',
  appId: '1:1022606318990:web:a1c3fbf36d8f2a884818df',
  measurementId: 'G-DETV0FXJ25',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
