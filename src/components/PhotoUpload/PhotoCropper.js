import { useRef } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const PhotoCropper = ({ setImage, image }) => {
  const cropperRef = useRef(null);

  const onCrop = () => {
    if (typeof cropperRef.current.getCroppedCanvas() === 'undefined') {
      return;
    }
    cropperRef.current.getCroppedCanvas().toBlob((blob) => {
      setImage(blob);
    }, 'image/jpeg');
  };

  return (
    <Cropper
      src={image}
      style={{ height: 200, width: '100%' }}
      // Cropper.js options
      initialAspectRatio={1}
      priview='.imagePreview'
      guides={false}
      viewMode={1}
      dragMode='move'
      scalable={true}
      cropBoxMovable={true}
      cropBoxResizable={true}
      crop={onCrop}
      ref={cropperRef}
    />
  );
};

export default PhotoCropper;
