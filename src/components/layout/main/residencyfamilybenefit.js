import React from 'react';

const Residencyfamilybenefit = ({ familybenefit}) => {
  console.log(familybenefit)


  return (
    <div className="eligibility-container">
      <h2 className="eligibility-title">Family Benefits and Additional Perks</h2>
      <div className="eligibility-grid">
        
          <div className="eligibility-card">
          <h3>{familybenefit?.[0]?.title}</h3>
          <p>{familybenefit?.[0]?.Description}</p>
        </div>

        <div className="eligibility-card">
        <h3>{familybenefit?.[1]?.title}</h3>
        <p>{familybenefit?.[1]?.Description}</p>
        </div>

        <div className="eligibility-card">
        <h3>{familybenefit?.[2]?.title}</h3>
        <p>{familybenefit?.[2]?.Description}</p>
        </div>
        
      </div>
    </div>
  );
}

export default Residencyfamilybenefit;