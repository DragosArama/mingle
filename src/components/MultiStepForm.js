import "../styles/Pages.css";
import { useState } from "react";
import FormStep from "./FormStep";

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5; // Total number of steps in the form

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-white shadow-md rounded-lg">
      <FormStep isCurrentStep={currentStep === 1}>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Step 1: Contact Information</h2>
          <input type="text" placeholder="Organization Name" className="input input-bordered w-full max-w-xs" />
          <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
          <button onClick={nextStep} className="btn btn-primary mt-4">
            Next
          </button>
        </div>
      </FormStep>

      <FormStep isCurrentStep={currentStep === 2}>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Step 2: Interested in Sponsored Content</h2>
          <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Describe your goals..."></textarea>
          <div className="flex space-x-2">
            <button onClick={prevStep} className="btn btn-secondary">
              Back
            </button>
            <button onClick={nextStep} className="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </FormStep>

      <FormStep isCurrentStep={currentStep === 3}>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Step 3: Advertising Opportunities</h2>
          <select multiple className="select select-bordered w-full max-w-xs">
            <option>Advertizing</option>
            <option>Publishing</option>
            <option>Sponsored Content</option>
            <option>Custom Campaigns</option>
            <option>Affiliate marketing</option>
            <option>Personalized Feed</option>
          </select>
          <div className="flex space-x-2">
            <button onClick={prevStep} className="btn btn-secondary">
              Back
            </button>
            <button onClick={nextStep} className="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </FormStep>

      <FormStep isCurrentStep={currentStep === 4}>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Step 4: Content and Community Engagement</h2>
          <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Describe your interest..."></textarea>
          <div className="flex space-x-2">
            <button onClick={prevStep} className="btn btn-secondary">
              Back
            </button>
            <button onClick={nextStep} className="btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </FormStep>

      <FormStep isCurrentStep={currentStep === 5}>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Step 5: Digital Presence</h2>
          <input type="url" placeholder="Website URL" className="input input-bordered w-full max-w-xs" />
          <input type="url" placeholder="API URL (if any)" className="input input-bordered w-full max-w-xs" />
          <div className="mt-4">
            <label className="block mb-2">Social Media Platforms:</label>
            <input type="text" placeholder="Facebook" className="input input-bordered w-full max-w-xs mb-2" />
            <input type="text" placeholder="Twitter" className="input input-bordered w-full max-w-xs mb-2" />
            <input type="text" placeholder="Instagram" className="input input-bordered w-full max-w-xs mb-2" />
            <input type="text" placeholder="LinkedIn" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="flex space-x-2">
            <button onClick={prevStep} className="btn btn-secondary">
              Back
            </button>
            <button onClick={() => alert("Application Submitted!")} className="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </FormStep>
    </div>
  );
}

export default MultiStepForm;
