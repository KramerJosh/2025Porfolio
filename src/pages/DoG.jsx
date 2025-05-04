import { useState, useEffect } from 'react';
import ImageUploader from '../components/ImageUploader';
import DoGProcessor from '../components/DoGProcessor';
import DoGControls from '../components/DoGControls';

export default function DoG() {
  const [image, setImage] = useState(null);
  const [sigma1, setSigma1] = useState(1);
  const [sigma2, setSigma2] = useState(2);
  const [debouncedSigma1, setDebouncedSigma1] = useState(sigma1);
  const [debouncedSigma2, setDebouncedSigma2] = useState(sigma2);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSigma1(sigma1);
      setDebouncedSigma2(sigma2);
    }, 300);
    return () => clearTimeout(timeout);
  }, [sigma1, sigma2]);

  return (
    <div className="flex flex-col items-center px-4 gap-6">
      <h1 className="text-3xl font-bold mt-6">Difference of Gaussians Tool</h1>

      <ImageUploader onImageUpload={setImage} />

      {image && (
        <>
          <DoGControls
            sigma1={sigma1}
            sigma2={sigma2}
            setSigma1={setSigma1}
            setSigma2={setSigma2}
          />
          <div className="border rounded shadow p-4 mt-4">
            <DoGProcessor
              image={image}
              sigma1={debouncedSigma1}
              sigma2={debouncedSigma2}
            />
          </div>
        </>
      )}
    </div>
  );
}
