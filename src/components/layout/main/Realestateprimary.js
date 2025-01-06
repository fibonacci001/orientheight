"use client";
import { useMemo } from "react";
import { useEffect, useState } from "react";
import { db } from "@/libs/firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";
import PropertyCard from "../../../app/realstate/PropertyCard";
import PropertyFilters from "../../../app/realstate/PropertyFilters";

const RealEstatePrimary = () => {
  // Initialize all our state variables
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [displayCount, setDisplayCount] = useState(9);
  const [availableLocations, setAvailableLocations] = useState([]);

  // Set up our initial filter values
  const [filters, setFilters] = useState({
    country: "", // Empty string to show all locations initially
    priceRange: {
      min: 0,
      max: 2000000 // Set a higher default maximum
    },
    bedrooms: "" // Empty string to show all bedroom options initially
  });

  // Fetch properties from Firebase when component mounts
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const propertiesRef = collection(db, "services", "Realestate", "Realstatelist");
        const snapshot = await getDocs(propertiesRef);
        
        if (snapshot.empty) {
          console.log("No properties found");
          setProperties([]);
          return;
        }

        // Convert Firebase documents to our property objects
        const propertiesList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        // Extract and set unique locations for our filter dropdown
        const locations = new Set();
        propertiesList.forEach(property => {
          if (property.location) {
            property.location.split(',').forEach(part => {
              locations.add(part.trim());
            });
          }
        });
        setAvailableLocations(Array.from(locations).sort());

        // Store the properties in state
        setProperties(propertiesList);
        console.log('Properties loaded:', propertiesList);
      } catch (err) {
        console.error('Error fetching properties:', err);
        setError('Failed to fetch properties');
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      // Location filtering with more precise matching
      const locationMatch = !filters.country || (
        property.location?.toLowerCase().split(',').map(part => part.trim())
          .includes(filters.country.toLowerCase())
      );
  
      // Bedrooms filtering
      const bedroomsValue = property.features?.[1]?.bedrooms?.split(' ')?.[0] || '0';
      const matchesBedrooms = !filters.bedrooms || 
        (filters.bedrooms === "4" 
          ? Number(bedroomsValue) >= 4
          : String(bedroomsValue) === String(filters.bedrooms));
  
      // Price filtering
      const priceValue = Number(property.Property_cost?.replace(/[€+,]/g, '')) || 0;
      const matchesPrice = priceValue >= Number(filters.priceRange.min) && 
        priceValue <= Number(filters.priceRange.max);
  
      return locationMatch && matchesBedrooms && matchesPrice;
    });
  }, [properties, filters]);

  useEffect(() => {
    if (filters.country) {
      console.log('Filtering for location:', filters.country);
      console.log('Properties before filter:', properties.length);
      console.log('Properties after filter:', filteredProperties.length);
      console.log('Filtered properties:', filteredProperties);
    }
  }, [filters.country, properties, filteredProperties]);

  // Get the subset of properties to display based on our display count
  const displayedProperties = filteredProperties.slice(0, displayCount);

  // Handle clicking the "Show More" button
  const handleShowMore = () => {
    setDisplayCount(prev => prev + 6);
  };

  // Show loading spinner while fetching data
  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border" style={{ color: 'var(--primaryColor)' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Show error message if something went wrong
  if (error) {
    return (
      <div className="alert alert-danger m-4" role="alert">
        {error}
      </div>
    );
  }

  return (
    <section className="real-estate-section">
      {/* Filters */}
      <PropertyFilters 
        filters={filters}
        setFilters={setFilters}
        availableLocations={availableLocations}
      />

      {/* Main content area */}
      <div className="container py-5">
        {/* Results count */}
        <div className="results-count mb-4">
          <p style={{ color: 'var(--contentColor)' }}>
            Showing {displayedProperties.length} of {filteredProperties.length} properties
          </p>
        </div>

        {/* Property grid */}
        <div className="properties-grid">
          {displayedProperties.map(property => (
            <PropertyCard 
              key={property.id} 
              property={property}
            />
          ))}
        </div>

        {/* Show more button */}
        {displayCount < filteredProperties.length && (
          <div className="text-center mt-5">
            <button
              onClick={handleShowMore}
              className="show-more-btn"
            >
              Show More Properties
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .real-estate-section {
          background-color: var(--greyColor);
          min-height: 100vh;
        }

        .properties-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 30px;
          margin-bottom: 30px;
        }

        @media (min-width: 768px) {
          .properties-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1200px) {
          .properties-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .show-more-btn {
          background-color: var(--primaryColor);
          color: var(--blackColor);
          border: none;
          padding: 12px 30px;
          border-radius: 25px;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .show-more-btn:hover {
          background-color: var(--secondaryColor);
          transform: translateY(-2px);
        }

        .results-count {
          font-size: 14px;
          padding: 0 15px;
        }
      `}</style>
    </section>
  );
};

export default RealEstatePrimary;