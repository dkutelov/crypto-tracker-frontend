import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB9-iIUVg_3TEIOkQBCYcAbOo5xHNeZzPE',
  authDomain: 'crypterio-310511.firebaseapp.com',
  projectId: 'crypterio-310511',
  storageBucket: 'crypterio-310511.appspot.com',
  messagingSenderId: '628658768256',
  appId: '1:628658768256:web:6d091c26161916485d5965',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
