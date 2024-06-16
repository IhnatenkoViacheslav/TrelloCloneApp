// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAEtGdM2d6OVz9duPnOD6SZfK5AtRfmQSU',
  authDomain: 'trello-clone-7fe84.firebaseapp.com',
  projectId: 'trello-clone-7fe84',
  storageBucket: 'trello-clone-7fe84.appspot.com',
  messagingSenderId: '1089639814235',
  appId: '1:1089639814235:web:0910ba68f4087eb128db7e'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
