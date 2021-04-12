import firebase from '../config/firebase.config';

export function uploadToFirebaseStorage(file, filename, userId) {
  const storageRef = firebase.storage().ref();

  return storageRef.child(`${userId}/${filename}`).put(file);
}
