import React from 'react';
import '../../../css/random.css';

const StepIndicator = ({ currentStep }) => {
  return (
    <div className="step-indicator">
      {[1, 2, 3].map((step, index) => (
        <div className="step-item" key={index}>
          <div className={`step-circle ${currentStep >= step ? 'active' : ''}`}>
            {step}
          </div>
          {step !== 3 && (
            <div className={`step-line ${currentStep > step ? 'active' : ''}`}></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
