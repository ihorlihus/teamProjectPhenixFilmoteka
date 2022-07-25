import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { refs } from './refs';

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
const autent = getAuth();
//logout a
refs.logoutButton.addEventListener('click', () => {
  signOut(autent)
    .then(() => {
      console.log('the user signed out');
      refs.userInfo.classList.add('visually-hidden');
      refs.authButtList.classList.remove('visually-hidden');
    })
    .catch(err => console.log(err.message));
});

//singup
refs.singupForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = refs.singupForm.email.value;
  const password = refs.singupForm.password.value;
  createUserWithEmailAndPassword(autent, email, password)
    .then(cred => {
      hidenAuthModal();
      console.log(cred.user);
      refs.singupForm.reset();
    })
    .catch(error => {
      console.log(error.message);
      refs.singupForm.reset();
      alert(error.message);
    });
});

// login
refs.loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = refs.loginForm.email.value;
  const password = refs.loginForm.password.value;
  signInWithEmailAndPassword(autent, email, password)
    .then(cred => {
      hidenAuthModal();
      console.log('user logged in');
      console.log(cred.user);
      refs.loginForm.reset();
    })
    .catch(err => {
      console.log(err);
      alert(`${err.message}`);
      refs.loginForm.reset();
    });
});
// google auth
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/cloud-platform.read-only');
function googleAuth(e) {
  e.preventDefault();
  signInWithPopup(autent, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(result.user);
      hidenAuthModal(user);
      refs.loginForm.reset();
      refs.singupForm.reset();
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
refs.loginGoogle.addEventListener('click', googleAuth);
refs.signupGoogle.addEventListener('click', googleAuth);
// .......................................................style JS
// login open form
refs.loginOpen.addEventListener('click', e => {
  e.preventDefault();
  refs.loginForm.classList.toggle('visually-hidden');
  refs.singupForm.classList.add('visually-hidden');
});
// signup open form
refs.signupOpen.addEventListener('click', e => {
  e.preventDefault();
  refs.singupForm.classList.toggle('visually-hidden');
  refs.loginForm.classList.add('visually-hidden');
});

function hidenAuthModal(user) {
  refs.userImg.src = `${user.photoURL}`;

  refs.userName.textContent = `${user.displayName}`;
  refs.authButtList.classList.add('visually-hidden');
  refs.userInfo.classList.remove('visually-hidden');
  refs.singupForm.classList.add('visually-hidden');
  refs.loginForm.classList.add('visually-hidden');
}
// console.log(analytics);
