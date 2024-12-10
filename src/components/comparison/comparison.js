"use client"

import React, { useState } from 'react';
import HeroInner from "@/components/sections/hero-banners/HeroInner";

const programsData = {
  'UK TIER 1 INVESTOR VISA': {
    currency: 'GBP',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Business Investment',
    investmentAmount: '£2 million',
    governmentFees: 'Included in investment',
    timeToResidency: '8-10 weeks',
    timeToCitizenship: '6 years',
    physicalResidence: '6 months/year for ILR, 5 years for citizenship',
    interview: 'Not required',
    visaFreeCountries: '185 countries',
  },
  'PORTUGAL GOLDEN VISA': {
    currency: 'EUR',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Real Estate, Funds',
    investmentAmount: '€350,000 - €500,000',
    governmentFees: 'Included in investment',
    timeToResidency: '3-6 months',
    timeToCitizenship: '5 years',
    physicalResidence: '7 days/year for the first year, 14 days/2 years afterward',
    interview: 'Not required',
    visaFreeCountries: '188 countries',
  },
  'GREECE GOLDEN VISA': {
    currency: 'EUR',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Real Estate',
    investmentAmount: '€250,000',
    governmentFees: 'Included in investment',
    timeToResidency: '2-3 months',
    timeToCitizenship: '7 years',
    physicalResidence: 'Not required for residency, 7 years for citizenship',
    interview: 'Not required',
    visaFreeCountries: '184 countries',
  },
  'SPAIN GOLDEN VISA': {
    currency: 'EUR',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Real Estate',
    investmentAmount: '€500,000',
    governmentFees: 'Included in investment',
    timeToResidency: '2-3 months',
    timeToCitizenship: '10 years',
    physicalResidence: 'Visit required during permit period',
    interview: 'Not required',
    visaFreeCountries: '190 countries',
  },
  'MALTA PERMANENT RESIDENCE PROGRAMME': {
    currency: 'EUR',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Government Bonds, Real Estate',
    investmentAmount: '€350,000',
    governmentFees: '€40,000 (non-refundable contribution)',
    timeToResidency: '6-8 months',
    timeToCitizenship: '5 years',
    physicalResidence: 'Not required for residency, 5 years for citizenship',
    interview: 'Required',
    visaFreeCountries: '186 countries',
  },
  'HUNGARY RESIDENCY PROGRAM': {
    currency: 'EUR',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Government Bonds',
    investmentAmount: '€250,000',
    governmentFees: 'Included in investment',
    timeToResidency: '2-3 months',
    timeToCitizenship: '8 years',
    physicalResidence: 'Not required for residency, 8 years for citizenship',
    interview: 'Not required',
    visaFreeCountries: '181 countries',
  },
  'CYPRUS RESIDENCY PROGRAM': {
    currency: 'EUR',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Real Estate',
    investmentAmount: '€300,000',
    governmentFees: 'Included in investment',
    timeToResidency: '2 months',
    timeToCitizenship: '7 years',
    physicalResidence: 'Not required for residency, 7 years for citizenship',
    interview: 'Not required',
    visaFreeCountries: '173 countries',
  },
  'ITALY RESIDENCY PROGRAM': {
    currency: 'EUR',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Real Estate or Business Investment',
    investmentAmount: '€500,000',
    governmentFees: 'Included in investment',
    timeToResidency: '3-6 months',
    timeToCitizenship: '10 years',
    physicalResidence: '183 days/year for residency',
    interview: 'Not required',
    visaFreeCountries: '190 countries',
  },
  'UAE GOLDEN VISA': {
    currency: 'AED',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Real Estate or Business Investment',
    investmentAmount: 'AED 2 million',
    governmentFees: 'Included in investment',
    timeToResidency: '4 months',
    timeToCitizenship: 'N/A',
    physicalResidence: 'No minimum stay required for residency',
    interview: 'Not required',
    visaFreeCountries: 'UAE does not offer citizenship for this program',
  },
  'EGYPT RESIDENCY PROGRAM': {
    currency: 'USD',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Real Estate or Business Investment',
    investmentAmount: '$100,000',
    governmentFees: 'Included in investment',
    timeToResidency: '3-6 months',
    timeToCitizenship: '10 years',
    physicalResidence: 'N/A',
    interview: 'Not required',
    visaFreeCountries: '52 countries',
  },
  'USA EB-5 IMMIGRANT INVESTOR PROGRAM': {
    currency: 'USD',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Business Investment',
    investmentAmount: '$800,000 - $1.8 million',
    governmentFees: 'Included in investment',
    timeToResidency: '12-18 months',
    timeToCitizenship: '5 years',
    physicalResidence: '6 months/year for Green Card maintenance',
    interview: 'Required',
    visaFreeCountries: '185 countries',
  },
  'SAINT KITTS & NEVIS CITIZENSHIP': {
    currency: 'USD',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Donation, Real Estate',
    investmentAmount: '$250,000 - $350,000+',
    governmentFees: 'Included in investment',
    timeToResidency: 'Not applicable',
    timeToCitizenship: '4-6 months',
    physicalResidence: 'Not required',
    interview: 'Not required',
    visaFreeCountries: '166 countries',
  },
  'GRENADA CITIZENSHIP': {
    currency: 'USD',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Donation, Real Estate',
    investmentAmount: '$235,000 - $270,000+',
    governmentFees: 'Included in investment',
    timeToResidency: 'Not applicable',
    timeToCitizenship: '4-6 months',
    physicalResidence: 'Not required',
    interview: 'Not required',
    visaFreeCountries: '153 countries',
  },
  'DOMINICA CITIZENSHIP': {
    currency: 'USD',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Donation, Real Estate',
    investmentAmount: '$200,000+',
    governmentFees: 'Included in investment',
    timeToResidency: 'Not applicable',
    timeToCitizenship: '4-6 months',
    physicalResidence: 'Not required',
    interview: 'Not required',
    visaFreeCountries: '153 countries',
  },
  'SAINT LUCIA CITIZENSHIP': {
    currency: 'USD',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Donation, Real Estate',
    investmentAmount: '$240,000 - $300,000+',
    governmentFees: 'Included in investment',
    timeToResidency: 'Not applicable',
    timeToCitizenship: '4-6 months',
    physicalResidence: 'Not required',
    interview: 'Not required',
    visaFreeCountries: '158 countries',
  },
  'ANTIGUA & BARBUDA CITIZENSHIP': {
    currency: 'USD',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Real Estate, Business Investment, Contribution',
    investmentAmount: '$100,000 - $1.5 million',
    governmentFees: 'Included in investment',
    timeToResidency: 'Not applicable',
    timeToCitizenship: '4-6 months',
    physicalResidence: '5 days in the first 5 years',
    interview: 'Not required',
    visaFreeCountries: '161 countries',
  },
  'MALTA NATURALIZATION': {
    currency: 'EUR',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Direct Contribution, Real Estate',
    investmentAmount: '€600,000 - €750,000',
    governmentFees: 'Included in investment',
    timeToResidency: 'Not applicable',
    timeToCitizenship: '12-14 months',
    physicalResidence: 'Eligibility conditions for citizenship',
    interview: 'Not required',
    visaFreeCountries: '180 countries',
  },
  'VANUATU CITIZENSHIP': {
    currency: 'USD',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Contribution',
    investmentAmount: '$130,000',
    governmentFees: 'Included in investment',
    timeToResidency: 'Not applicable',
    timeToCitizenship: '2-3 months',
    physicalResidence: 'Not required',
    interview: 'Not required',
    visaFreeCountries: '98 countries',
  },
  'TÜRKİYE CITIZENSHIP': {
    currency: 'USD',
    netWorthRequirement: 'No minimum',
    typeOfInvestment: 'Real Estate, Bank Deposits, Bonds, Local Business',
    investmentAmount: '$400,000 - $500,000',
    governmentFees: 'Included in investment',
    timeToResidency: 'Not applicable',
    timeToCitizenship: '4-5 months',
    physicalResidence: 'Not required',
    interview: 'Not required',
    visaFreeCountries: '110 countries',
  },
};

const compareFields = {
  currency: 'Currency',
  netWorthRequirement: 'Net-worth Requirement',
  typeOfInvestment: 'Type of Investment',
  investmentAmount: 'Investment Amount',
  governmentFees: 'Government Fees',
  timeToResidency: 'Time to Residency',
  timeToCitizenship: 'Time to Citizenship',
  physicalResidence: 'Physical Residence Requirement (for citizenship)',
  interview: 'Interview',
  visaFreeCountries: 'Visa Free Countries'
};

const styles = {
    tableContainer: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      margin: '20px auto',
      width: '100%',
      maxWidth: '1200px',
      overflow: 'hidden',
      border: '1px solid rgba(20, 40, 75, 0.1)'
    },
    headerBg: {
      backgroundColor: '#14284B',
      padding: '0.75rem',
      width: '250px'
    },
    dropdownHeader: {
      backgroundColor: 'white',
      border: '1px solid #dee2e6',
      borderRadius: '4px',
      color: '#495057',
      cursor: 'pointer',
      fontSize: '14px',
      padding: '0.6rem 1rem',
      position: 'relative',
      textAlign: 'left',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'all 0.2s ease-in-out',
      height: '40px'
    },
    dropdownContent: {
      backgroundColor: 'white',
      border: '1px solid #dee2e6',
      borderRadius: '4px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      marginTop: '4px',
      position: 'absolute',
      width: '100%',
      zIndex: 1000,
      left: '0'
    },
    searchContainer: {
      padding: '10px',
      borderBottom: '1px solid #dee2e6',
      backgroundColor: '#f8f9fa'
    },
    searchInput: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid #dee2e6',
      borderRadius: '4px',
      fontSize: '14px'
    },
    optionsList: {
      maxHeight: '250px',
      overflowY: 'auto',
      margin: 0,
      padding: '6px 0',
      listStyle: 'none'
    },
    option: {
      padding: '8px 12px',
      cursor: 'pointer',
      fontSize: '14px',
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      backgroundColor: 'transparent'
    },
    tableCell: {
      padding: '0.75rem 1rem',
      fontSize: '14px',
      color: '#495057',
      borderBottom: '1px solid #dee2e6',
      backgroundColor: '#fff',
      verticalAlign: 'middle'
    },
    labelCell: {
      fontWeight: '500',
      color: '#14284B',
      backgroundColor: 'white',
      position: 'sticky',
      left: 0,
      zIndex: 10,
      width: '200px',
      boxShadow: '2px 0 5px -2px rgba(0,0,0,0.1)'
    },
    selectedProgram: {
      fontWeight: '500',
      color: '#14284B'
    },
    eligibilityButton: {
      display: 'inline-block',
      padding: '8px 16px',
      backgroundColor: '#14284B',
      color: 'white',
      borderRadius: '4px',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
      width: '100%',
      maxWidth: '150px',
      marginLeft: '-100px',
      
    }
}

const ProgramSelector = ({ onSelect, columnIndex, activeDropdown, setActiveDropdown, selectedProgram }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const isOpen = activeDropdown === columnIndex;
  
  const programs = Object.keys(programsData);
  const filteredPrograms = programs.filter(program => 
    program.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggle = (e) => {
    e.stopPropagation();
    setActiveDropdown(isOpen ? null : columnIndex);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen, setActiveDropdown]);

  return (
    <div className="dropdown-container position-relative">
      <button 
        onClick={handleToggle}
        style={styles.dropdownHeader}
        className="d-flex align-items-center justify-content-between w-100"
      >
        <span style={selectedProgram ? styles.selectedProgram : {}}>
          {selectedProgram || 'SELECT PROGRAM'}
        </span>
        <svg 
          width="10" 
          height="6" 
          viewBox="0 0 10 6" 
          fill="none" 
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease-in-out'
          }}
        >
          <path d="M1 1L5 5L9 1" stroke="#495057" strokeWidth="2"/>
        </svg>
      </button>
      
      {isOpen && (
        <div style={styles.dropdownContent}>
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
              autoFocus
            />
          </div>
          <div style={styles.optionsList}>
            {filteredPrograms.map((program) => (
              <button
                key={program}
                style={styles.option}
                onClick={() => {
                  onSelect(columnIndex, program);
                  setActiveDropdown(null);
                  setSearchTerm('');
                }}
                className="option-item"
              >
                {program}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ComparisonTable = () => {
    const [selectedPrograms, setSelectedPrograms] = useState(Array(4).fill(null));
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [columnsToShow, setColumnsToShow] = useState(4);
    const [isMobile, setIsMobile] = useState(false);
  
    const handleProgramSelect = (columnIndex, program) => {
      const newPrograms = [...selectedPrograms];
      newPrograms[columnIndex] = program;
      setSelectedPrograms(newPrograms);
    };
  
    React.useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        setIsMobile(width < 768);
        setColumnsToShow(width < 768 ? 2 : 4);
      };
      
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
        <main>
            <HeroInner title={"comparision"}  />
        <div className="">
        <div
        className="service__details__heading"
        data-aos="fade-up"
        data-aos-duration="500"
        >
            <h4 style={{
                color: 'black'
            }}>
            Compare programs
            </h4>
        </div>
      <div className="table-responsive" 
     
      style={styles.tableContainer}>
        <style jsx global>{`
          @keyframes dropdownFade {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .option-item:hover {
            background-color: #f8f9fa;
          }
          
          .table-comparison {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
          }
          
          .table-comparison td,
          .table-comparison th {
            border: none;
            border-bottom: 1px solid #dee2e6;
          }
  
          @media (max-width: 768px) {
            .table-container {
              margin: 0;
              border-radius: 0;
              font-size: 13px;
            }
            
            .table-responsive {
              overflow-x: auto;
              -webkit-overflow-scrolling: touch;
            }
            
            .dropdown-header {
              font-size: 13px;
              padding: 0.5rem;
            }
            
            .table-cell-mobile {
              padding: 0.5rem !important;
              font-size: 13px !important;
            }
            
            .eligibility-button-mobile {
              padding: 6px 12px !important;
              font-size: 13px !important;
              marginLeft: '-50px'
              
            }
          }
        `}</style>
        
        <table className="table-comparison">
          <thead>
            <tr>
              <th style={{ backgroundColor: 'white', width: isMobile ? '150px' : '200px' }}></th>
              {Array(columnsToShow).fill(null).map((_, index) => (
                <th key={index} style={{
                  ...styles.headerBg,
                  width: isMobile ? '180px' : '250px',
                  padding: isMobile ? '0.5rem' : '0.75rem'
                }}>
                  <ProgramSelector
                    onSelect={handleProgramSelect}
                    columnIndex={index}
                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                    selectedProgram={selectedPrograms[index]}
                  />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(compareFields).map(([key, label]) => (
              <tr key={key}>
                <td style={{ ...styles.tableCell, ...styles.labelCell, width: isMobile ? '150px' : '200px' }}>{label}</td>
                {Array(columnsToShow).fill(null).map((_, index) => (
                  <td 
                    key={index} 
                    style={{
                      ...styles.tableCell,
                      width: isMobile ? '180px' : '250px',
                      padding: isMobile ? '0.5rem' : '0.75rem 1rem'
                    }}
                    className="table-cell-mobile"
                  >
                    {selectedPrograms[index] && programsData[selectedPrograms[index]] 
                      ? programsData[selectedPrograms[index]][key] 
                      : ''}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td style={{ ...styles.tableCell, ...styles.labelCell, width: isMobile ? '150px' : '200px' }}></td>
              {Array(columnsToShow).fill(null).map((_, index) => (
                <td 
                  key={index} 
                  style={{
                    ...styles.tableCell,
                    width: isMobile ? '180px' : '250px',
                    textAlign: 'center',
                    padding: '1rem'
                  }}
                >
                  {selectedPrograms[index] && (
                    <button 
                      
                      className="eligibilityButton"
                      
                    >
                      Check Eligibility
                    </button>
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      </main>
    ); }

export default ComparisonTable;