import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import styles from './PhotoUpload.module.css';
import uploadFile from '../../assets/icons/uploadFile.svg';

const PhotoDropzone = ({ setFiles }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [setFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={styles.dropzone}
      style={{ borderColor: isDragActive ? '#beedaf' : '#27be94' }}
    >
      <input {...getInputProps()} />
      <img src={uploadFile} alt='upload icon' className={styles.uploadIcon} />
      <p>Drop Image Here</p>
    </div>
  );
};

export default PhotoDropzone;
