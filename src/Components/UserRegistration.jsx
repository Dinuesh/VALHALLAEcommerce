import React, { useState } from "react";

const steps = [
  { id: 1, label: "Company Info" },
  { id: 2, label: "Contact Info" },
  { id: 3, label: "Complete" },
];

const UserRegistration = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    country: "",
    accountRole: "",
    organizationNature: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      formData.country.trim() &&
      formData.accountRole.trim() &&
      formData.organizationNature.trim()
    ) {
      setSubmitted(true);
      alert("Form submitted!");
      setFormData({
        country: "",
        accountRole: "",
        organizationNature: "",
      });
      // Optional: If you want to hide the "Registration Complete" message after reset, uncomment below:
      // setSubmitted(false);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const isStepCompleted = (stepId) => {
    if (stepId === 1) {
      return formData.country.trim() !== "";
    }
    if (stepId === 2) {
      return (
        formData.accountRole.trim() !== "" &&
        formData.organizationNature.trim() !== ""
      );
    }
    if (stepId === 3) {
      return submitted;
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
      <div className="bg-white rounded-lg p-6 sm:p-8 w-full max-w-4xl shadow-md">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">User Registration</h1>

        {/* Process Steps */}
        <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-10 relative">
          {/* Line behind steps */}
          <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-1 bg-gray-300 z-0 transform -translate-y-1/2"></div>
          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center mb-6 sm:mb-0">
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full 
                ${isStepCompleted(step.id) ? "bg-green-500" : "bg-blue-600"} 
                text-white font-semibold transition-colors duration-300`}
              >
                {step.id}
              </div>
              <span className="text-sm mt-2 text-center text-gray-700">{step.label}</span>
            </div>
          ))}
        </div>

        {/* Form Fields */}
        <form className="space-y-6 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <label htmlFor="country" className="w-full sm:w-40 font-semibold text-gray-700">
              Country / Region:
            </label>
            <input
              type="text"
              id="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border text-black border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your country or region"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <label htmlFor="accountRole" className="w-full sm:w-40 font-semibold text-gray-700">
              Account Role:
            </label>
            <input
              type="text"
              id="accountRole"
              value={formData.accountRole}
              onChange={handleChange}
              className="w-full border text-black border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter account role"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <label htmlFor="organizationNature" className="w-full sm:w-40 font-semibold text-gray-700">
              Organization Nature:
            </label>
            <input
              type="text"
              id="organizationNature"
              value={formData.organizationNature}
              onChange={handleChange}
              className="w-full border text-black border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter organization nature"
            />
          </div>

          {submitted && (
            <div className="text-center text-lg font-semibold text-green-600">
              ✅ Registration Complete!
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;
