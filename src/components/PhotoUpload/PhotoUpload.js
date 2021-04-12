import { useState, useContext } from 'react';
import PhotoCropper from './PhotoCropper';
import PhotoDropzone from './PhotoDropzone';
import cuid from 'cuid';

import UserContext from '../../context/userContext';
import { getFileExtension } from '../../utils/getFileExtention';
import * as firbaseService from '../../services/firebaseService';

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
    <div>
      <div>
        {files.length > 0 && (
          <PhotoCropper setImage={setImage} image={files[0].preview} />
        )}
      </div>
      <div>
        <h4>Upload your photo</h4>
        <PhotoDropzone setFiles={setFiles} />
      </div>
      <div>
        {files.length > 0 && (
          <>
            <div
              className='img-preview'
              style={{ minHeight: 200, minWidth: 200, overflow: 'hidden' }}
            />
            <button onClick={uploadImage}>check</button>
            <button>close</button>
          </>
        )}
      </div>
    </div>
  );
};

export default PhotoUpload;
