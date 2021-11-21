import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDfD4ml4o0ns2QP5JfsjMXEwNxeotPEcWA',
  authDomain: 'lemusica-ed217.firebaseapp.com',
  projectId: 'lemusica-ed217',
  storageBucket: 'lemusica-ed217.appspot.com',
  messagingSenderId: '86269057418',
  appId: '1:86269057418:web:9e90e216f9bc4bdda0d073',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  // eslint-disable-next-line no-alert
  alert(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
