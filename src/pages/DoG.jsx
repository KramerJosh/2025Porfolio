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
    <div className="flex flex-col items-center px-4">
      <h1 className="text-3xl font-bold mt-6">Difference of Gaussians Tool</h1>
      <div className='mb-10 items-center content-center text-center'>
      <p>This page allows you to upload an image and then set two sigma values.</p>
      <p>Sigma values represent the amount of blur applied to the image.  Once the two blurs are applied, the resulting images have their pixels subtracted.</p>
      <p>After subtraction, we're left with a black image where the blurred images have the same pixel value, and crisp lines where the values differ.</p>
      <p>This can be used for artistic purposes, but it's also an important pre-processing step in machine learning.</p>
      <p>This tool is still a work in progress, and for now I don't recommend using sigma values greater than 7.  This page may crash, apologies ahead of time!</p>
    </div>
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
