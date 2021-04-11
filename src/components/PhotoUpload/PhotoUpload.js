import { useState } from 'react';
import PhotoCropper from './PhotoCropper';
import PhotoDropzone from './PhotoDropzone';

const PhotoUpload = () => {
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState(null);
  return (
    <div>
      <div>
        <h4>Upload your photo</h4>
        <PhotoDropzone setFiles={setFiles} />
      </div>
      <div>
        {files.length > 0 && (
          <PhotoCropper setImage={setImage} image={files[0].preview} />
        )}
      </div>
    </div>
  );
};

export default PhotoUpload;
