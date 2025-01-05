import React from 'react';
import { MapPin, Euro, Bed } from 'lucide-react';

const PropertyFilters = ({ filters, setFilters, availableLocations = [] }) => {
  // Handle location/country selection changes
  const handleCountryChange = (e) => {
    setFilters(prev => ({...prev, country: e.target.value}));
  };

  // Handle changes to the price range slider
  const handlePriceRangeChange = (value) => {
    setFilters(prev => ({
      ...prev,
      priceRange: {
        min: 0,
        max: value
      }
    }));
  };

  // Handle bedroom count selection changes
  const handleBedroomChange = (e) => {
    setFilters(prev => ({...prev, bedrooms: e.target.value}));
  };

  return (
    <div className="property-filters">
      <div className="container">
        <div className="filters-container">
          {/* Location Filter */}
          <div className="filter-item">
            <div className="filter-icon">
              <MapPin size={20} />
            </div>
            <div className="filter-content">
              <label>Location</label>
              <select 
                value={filters.country}
                onChange={handleCountryChange}
                className="filter-select"
              >
                <option value="">All Locations</option>
                {availableLocations.map(location => (
                  <option key={location} value={location.toLowerCase()}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="filter-item">
            <div className="filter-icon">
              <Euro size={20} />
            </div>
            <div className="filter-content">
              <label>Price Range</label>
              <div className="price-range-container">
                <input
                  type="range"
                  min="0"
                  max="1000000"
                  step="10000"
                  value={filters.priceRange.max}
                  onChange={(e) => handlePriceRangeChange(e.target.value)}
                  className="price-range"
                />
                <div className="price-labels">
                  <span>€0</span>
                  <span>€{Number(filters.priceRange.max).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bedrooms Filter */}
          <div className="filter-item">
            <div className="filter-icon">
              <Bed size={20} />
            </div>
            <div className="filter-content">
              <label>Bedrooms</label>
              <select 
                value={filters.bedrooms}
                onChange={handleBedroomChange}
                className="filter-select"
              >
                <option value="">Any</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Your existing styles remain the same */}
      <style jsx>{`
        /* Main container styling */
        .property-filters {
          background-color: var(--whiteColor);
          border-bottom: 1px solid var(--borderColor);
          padding: 20px 0;
        }

        /* Filter layout container */
        .filters-container {
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          gap: 20px;
        }

        /* Individual filter item styling */
        .filter-item {
          flex: 1;
          display: flex;
          align-items: flex-start;
          padding: 10px 20px;
          border-right: 1px solid var(--borderColor);
        }

        .filter-item:last-child {
          border-right: none;
        }

        /* Icon container with proper alignment */
        .filter-icon {
          color: var(--primaryColor);
          margin-right: 15px;
          display: flex;
          align-items: flex-start;
          padding-top: 4px;
        }

        /* Content area styling */
        .filter-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        /* Label styling */
        .filter-content label {
          display: block;
          font-size: 12px;
          color: var(--contentColor);
          margin-bottom: 4px;
        }

        /* Select input styling */
        .filter-select {
          width: 100%;
          border: none;
          background: transparent;
          color: var(--headingColor);
          font-size: 14px;
          padding: 4px 0;
          cursor: pointer;
        }

        .filter-select:focus {
          outline: none;
        }

        /* Price range slider styling */
        .price-range-container {
          width: 100%;
          padding: 10px 0;
        }

        .price-range {
          width: 100%;
          -webkit-appearance: none;
          height: 4px;
          background: var(--borderColor);
          border-radius: 2px;
          outline: none;
        }

        .price-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--primaryColor);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .price-range::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        .price-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          font-size: 12px;
          color: var(--contentColor);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .filters-container {
            flex-direction: column;
            gap: 10px;
          }

          .filter-item {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid var(--borderColor);
            padding: 15px 0;
          }

          .filter-item:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </div>
  );
};

export default PropertyFilters;




