// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "insta-clone-a5deb.firebaseapp.com",
  projectId: "insta-clone-a5deb",
  storageBucket: "insta-clone-a5deb.appspot.com",
  messagingSenderId: "551070064043",
  appId: "1:551070064043:web:01f7701c5b0475f5c046ee",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

// rules_version = '2';

// // Craft rules based on data in your Firestore database
// // allow write: if firestore.get(
// //    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
// service firebase.storage {
//   match /b/{bucket}/o {
//     match /{allPaths=**} {
//       allow read,
//       write: if
//       request.resource.size < 2 * 1024 * 1024 &&
//       request.resource.contentType.matches('image/.*')

//       ;
//     }
//   }
// }
