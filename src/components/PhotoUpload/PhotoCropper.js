import { useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const PhotoCropper = ({ setImage, image }) => {
  const cropperRef = useRef(null);

  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    if (typeof cropper.getCroppedCanvas() === 'undefined') {
      return;
    }
    cropper.getCroppedCanvas().toBlob((blob) => {
      setImage(blob);
    }, 'image/jpg');
  };

  return (
    <>
      <h4>Crop/ Zoom your avatar</h4>
      <Cropper
        src={image}
        style={{ height: 300, width: '100%' }}
        initialAspectRatio={1}
        preview='.img-preview'
        guides={false}
        viewMode={1}
        dragMode='move'
        scalable={true}
        cropBoxMovable={true}
        cropBoxResizable={true}
        crop={onCrop}
        ref={cropperRef}
      />{' '}
    </>
  );
};

export default PhotoCropper;
