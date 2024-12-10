import React from 'react';

const EligibilityCard = ({ title, description }) => (
  <div className="eligibility-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const EligibilityRequirements = () => {
  const requirements = [
    {
      title: "AGE",
      description: "Must be at least 18 years old to be a Main Applicant"
    },
    {
      title: "GOOD CHARACTER",
      description: "Must undergo a criminal background check."
    },
    {
      title: "FINANCIAL ABILITY",
      description: "Must prove outstanding character through bank statements and employer references."
    },
    {
      title: "RESIDENCY",
      description: "There are no residency requirements to qualify for citizenship."
    }
  ];

  return (
    <div className="eligibility-container">
      <h2 className="eligibility-title">ELIGIBILITY REQUIREMENTS</h2>
      <div className="eligibility-grid">
        {requirements.map((req, index) => (
          <EligibilityCard 
            key={index}
            title={req.title}
            description={req.description}
          />
        ))}
      </div>
    </div>
  );
};

export default EligibilityRequirements;