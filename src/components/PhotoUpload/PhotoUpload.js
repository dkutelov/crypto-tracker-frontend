import { useState, useContext } from 'react';
import PhotoCropper from './PhotoCropper';
import PhotoDropzone from './PhotoDropzone';
import cuid from 'cuid';

import UserContext from '../../context/userContext';
import { getFileExtension } from '../../utils/getFileExtention';
import * as firbaseService from '../../services/firebaseService';
import styles from './PhotoUpload.module.css';

const PhotoUpload = () => {
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    state: { user },
  } = useContext(UserContext);

  const handleCancelCrop = () => {
    setFiles([]);
    setImage(null);
  };

  const uploadImage = () => {
    setLoading(true);
    const fileName = `${cuid()}.${getFileExtension(files[0].name)}`;
    const uploadTask = firbaseService.uploadToFirebaseStorage(
      image,
      fileName,
      user.id
    );
    uploadTask.on(
      'state_change',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '%');
      },
      (error) => {
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl) => {
          console.log(downloadUrl);
          setLoading(false); // move in profileService
          handleCancelCrop();
        });
      }
    );
  };

  return (
    <div className={styles.container}>
      <div>
        <PhotoDropzone setFiles={setFiles} />
      </div>
      <div>
        {files.length > 0 && (
          <>
            <h4>Crop Preview</h4>
            <div
              className='img-preview'
              style={{
                minHeight: 230,
                minWidth: 230,
                borderRadius: 20,
                overflow: 'hidden',
              }}
            />
          </>
        )}
      </div>
      <div className={styles.cropWrapper}>
        {files.length > 0 && (
          <PhotoCropper setImage={setImage} image={files[0].preview} />
        )}
      </div>
      {files.length > 0 && (
        <div className={styles.buttonWrapper}>
          <button onClick={uploadImage}>Upload</button>
          <button>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
