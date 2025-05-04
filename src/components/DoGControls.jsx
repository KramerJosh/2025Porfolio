import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function DoGControls({ sigma1, sigma2, setSigma1, setSigma2 }) {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (sigma1 > 10 || sigma2 > 10) {
      setShowWarning(true);
    } else {
      setShowWarning(false);
    }
  }, [sigma1, sigma2]);

  const handleSigmaChange = (setter) => (e) => {
    let val = parseFloat(e.target.value);
    if (isNaN(val)) val = 1;
    val = Math.max(0.1, Math.min(val, 10)); // Clamp between 0.1 and 10
    setter(val);
  };

  return (
    <div className="flex flex-col items-start gap-4 mt-4">
      <div>
        <label className="mr-2">Sigma 1:</label>
        <input
          type="number"
          value={sigma1}
          onChange={handleSigmaChange(setSigma1)}
          step="0.1"
          min="0.1"
          max="10"
          className="input input-bordered w-20"
        />
      </div>
      <div>
        <label className="mr-2">Sigma 2:</label>
        <input
          type="number"
          value={sigma2}
          onChange={handleSigmaChange(setSigma2)}
          step="0.1"
          min="0.1"
          max="7"
          className="input input-bordered w-20"
        />
      </div>
      {showWarning && (
        <p className="text-sm text-warning mt-2">
          High sigma values may slow down processing or cause crashes.
        </p>
      )}
    </div>
  );
}

DoGControls.propTypes = {
  sigma1: PropTypes.number.isRequired,
  sigma2: PropTypes.number.isRequired,
  setSigma1: PropTypes.func.isRequired,
  setSigma2: PropTypes.func.isRequired,
};
