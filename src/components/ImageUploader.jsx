import { useEffect, useState } from 'react';

export default function ImageUploader({ onImageUpload }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (image) {
      onImageUpload(image);
    }
  }, [image, onImageUpload]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const resizedImage = resizeImage(img, 800);
        setImage(resizedImage);
      };
    };
    reader.readAsDataURL(file);
  };

  const resizeImage = (img, maxWidth) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const scale = maxWidth / img.width;
    canvas.width = maxWidth;
    canvas.height = img.height * scale;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/jpeg', 0.7);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />
    </div>
  );
}
