import { useRef, useEffect } from 'react';

export default function DoGProcessor({ image, sigma1 = 1, sigma2 = 2 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!image) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = image;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw original image
      ctx.drawImage(img, 0, 0);

      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      // Apply DoG
      const blurred1 = applyGaussianBlur(imageData, sigma1);
      const blurred2 = applyGaussianBlur(imageData, sigma2);
      const dogData = subtractImageData(blurred1, blurred2);

      // Render result
      ctx.putImageData(dogData, 0, 0);
    };
  }, [image, sigma1, sigma2]);

  // --- Utility functions ---
  function applyGaussianBlur(imageData, sigma) {
    const kernel = generateGaussianKernel(sigma);
    return convolve(imageData, kernel);
  }

  function generateGaussianKernel(sigma) {
    const radius = Math.ceil(sigma * 3);
    const size = radius * 2 + 1;
    const kernel = [];
    let sum = 0;

    for (let y = -radius; y <= radius; y++) {
      for (let x = -radius; x <= radius; x++) {
        const value =
          (1 / (2 * Math.PI * sigma ** 2)) *
          Math.exp(-(x ** 2 + y ** 2) / (2 * sigma ** 2));
        kernel.push(value);
        sum += value;
      }
    }

    return kernel.map((v) => v / sum);
  }

  function convolve(imageData, kernel) {
    const { width, height, data } = imageData;
    const result = new ImageData(width, height);
    const radius = Math.floor(Math.sqrt(kernel.length) / 2);
    const kSize = radius * 2 + 1;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let r = 0, g = 0, b = 0;

        for (let ky = -radius; ky <= radius; ky++) {
          for (let kx = -radius; kx <= radius; kx++) {
            const px = Math.min(width - 1, Math.max(0, x + kx));
            const py = Math.min(height - 1, Math.max(0, y + ky));
            const i = (py * width + px) * 4;
            const k = kernel[(ky + radius) * kSize + (kx + radius)];

            r += data[i] * k;
            g += data[i + 1] * k;
            b += data[i + 2] * k;
          }
        }

        const idx = (y * width + x) * 4;
        result.data[idx] = r;
        result.data[idx + 1] = g;
        result.data[idx + 2] = b;
        result.data[idx + 3] = 255; // full opacity
      }
    }

    return result;
  }

  function subtractImageData(data1, data2) {
    const { width, height } = data1;
    const result = new ImageData(width, height);

    for (let i = 0; i < data1.data.length; i += 4) {
      result.data[i] = Math.abs(data1.data[i] - data2.data[i]);       // Red
      result.data[i + 1] = Math.abs(data1.data[i + 1] - data2.data[i + 1]); // Green
      result.data[i + 2] = Math.abs(data1.data[i + 2] - data2.data[i + 2]); // Blue
      result.data[i + 3] = 255; // Alpha
    }

    return result;
  }

  return <canvas ref={canvasRef} className="max-w-full border" />;
}
