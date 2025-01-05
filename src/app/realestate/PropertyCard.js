import React, { useState } from 'react';
import { MapPin, Bed, Bath, Move } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import cart3 from "@/assets/img/cart/cart3.jpg";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PropertyCard = ({ property }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Destructure property with default values for safety
  const {
    title = 'Property Title',
    Description = '',
    Property_cost = '0',
    location = '',
    images = [], // This will be your new images array
    coverimage = '', // Keep as fallback
    features = []
  } = property || {};

// Replace your current allImages definition with this:
const allImages = coverimage 
  ? [coverimage, ...images.filter(img => img !== coverimage && img !== '')] // Added check for empty strings
  : images.length > 0 
    ? images.filter(img => img !== '') // Filter out any empty strings in the images array
    : [cart3];

// The first image (coverimage) should load immediately, others can lazy load
const getLoadingAttribute = (index) => index === 0 ? "eager" : "lazy";
 
const formatPrice = (price) => {
  try {
    // Remove the currency symbol, plus sign, and commas if present
    const cleanPrice = price.toString().replace(/[€+,]/g, '').trim();
    const numPrice = Number(cleanPrice);
    
    if (isNaN(numPrice)) return '€0';
    
    // Format the price with the Euro symbol
    return new Intl.NumberFormat('en-EU', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    }).format(numPrice);
  } catch (error) {
    console.error('Price formatting error:', error);
    return '€0';
  }
};


  // Helper function to safely get feature values
  const getFeatureValue = (index, key) => {
    try {
      const value = features[index]?.[key];
      // Remove any trailing text like "Bedrooms" or "Baths" from the value
      return value ? value.split(' ')[0] : '0';
    } catch (error) {
      console.warn(`Error getting feature value for index ${index}, key ${key}:`, error);
      return '0';
    }
  };

  return (
    <div 
      className="property-card"
      onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Carousel with Enhanced Navigation */}
      <div className="property-image">
      
<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ 
    clickable: true,
    dynamicBullets: true
  }}
  loop={allImages.length > 1}
  // Only activate autoplay when the card is hovered and has multiple images
  autoplay={isHovered && allImages.length > 1 ? {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  } : false}
  className="property-swiper"
>

{allImages.map((image, index) => {
  const uniqueKey = `${property.id || ''}-image-${index}`;
  return (
    <SwiperSlide key={uniqueKey}>
      <div className="slide-image-container">
        <img 
          src={typeof image === 'string' ? image : cart3}
          alt={`${title} - View ${index + 1}`}
          loading={getLoadingAttribute(index)}
          onError={(e) => {
            console.error(`Failed to load image ${index}:`, image);
            e.target.src = cart3;
            e.target.onerror = null;
          }}
        />
      </div>
    </SwiperSlide>
  );
})}

        </Swiper>
        
        <div className="property-price">
          {formatPrice(Property_cost)}
        </div>
      </div>

      {/* Content Section with Enhanced Layout */}
      <div className="property-content">
        <h3 className="property-title">{title}</h3>
        
        <div className="property-location">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        <div className="property-features">
          {getFeatureValue(0, 'squaremile') !== '0' && (
            <div className="feature-item">
              <Move size={16} />
              <span>{getFeatureValue(0, 'squaremile')} m²</span>
            </div>
          )}
          {getFeatureValue(1, 'bedrooms') !== '0' && (
            <div className="feature-item">
              <Bed size={16} />
              <span>{getFeatureValue(1, 'bedrooms')} Beds</span>
            </div>
          )}
          {getFeatureValue(2, 'bathroom') !== '0' && (
            <div className="feature-item">
              <Bath size={16} />
              <span>{getFeatureValue(2, 'bathroom')} Baths</span>
            </div>
          )}
        </div>

        <div className={`property-description ${isHovered ? 'expanded' : ''}`}>
          <p>{Description}</p>
        </div>
      </div>

      <style jsx>{`
        /* Your existing styles remain the same, with these enhancements: */
        
        .slide-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          background-color: var(--greyColor);
          position: relative;
        }

        .slide-image-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--greyColor);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.slide-image-container img[loading="lazy"] + .slide-image-container::before {
  opacity: 1;
}

        .property-description {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.3s ease-in-out;
          margin-top: 0;
          color: var(--contentColor);
        }

        .property-description.expanded {
          max-height: 200px; /* Increased for longer descriptions */
          opacity: 1;
          margin-top: 12px;
          overflow-y: auto; /* Allow scrolling for long content */
        }

        /* Enhanced Swiper Navigation */
       :global(.swiper-button-next),
:global(.swiper-button-prev) {
  color: var(--primaryColor);
  background: rgba(255, 255, 255, 0.9);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  opacity: 0; // Combined from the second declaration
}

        :global(.swiper-button-next:hover),
        :global(.swiper-button-prev:hover) {
          background: var(--primaryColor);
          color: var(--whiteColor);
        }

        :global(.swiper-button-next::after),
        :global(.swiper-button-prev::after) {
          font-size: 16px;
          font-weight: bold;
        }

        :global(.swiper-pagination-bullet) {
          background: var(--primaryColor);
          opacity: 0.6;
          transition: all 0.3s ease;
        }

        :global(.swiper-pagination-bullet-active) {
          background: var(--primaryColor);
          opacity: 1;
          transform: scale(1.2);
        }

        :global(.swiper-button-next),
:global(.swiper-button-prev) {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.property-card:hover :global(.swiper-button-next),
.property-card:hover :global(.swiper-button-prev) {
  opacity: 1;
}

:global(.swiper-pagination) {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.property-card:hover :global(.swiper-pagination) {
  opacity: 1;
}

      /* Card Container */
        .property-card {
          background-color: var(--whiteColor);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .property-card:hover {
          transform: translateY(-5px);
        }

        /* Image Section */
        .property-image {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
        }

        .property-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease-out;
        }

        .property-card:hover .property-image img {
          transform: scale(1.05);
        }

        /* Price Tag */
        .property-price {
          position: absolute;
          top: 15px;
          right: 15px;
          background-color: var(--primaryColor);
          color: var(--blackColor);
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          z-index: 10;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        /* Content Section */
        .property-content {
          padding: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .property-title {
          color: var(--headingColor);
          font-size: 18px;
          font-weight: 600;
          margin: 0;
        }

        .property-location {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--contentColor);
        }

        .property-features {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-top: 1px solid var(--borderColor);
          border-bottom: 1px solid var(--borderColor);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--contentColor);
        }

        /* Description Section */
        .property-description {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.5s ease-in-out, opacity 0.3s ease-in-out, margin 0.3s ease-in-out cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: 0;
          color: var(--contentColor);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .property-description.expanded {
          max-height: 150px;
          opacity: 1;
          margin-top: 12px;
        }

        /* Swiper Customization */
        :global(.property-swiper) {
          height: 100%;
        }

        :global(.swiper-button-next),
:global(.swiper-button-prev) {
  color: var(--primaryColor);
  background: rgba(255, 255, 255, 0.9);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  opacity: 0; // Combined from the second declaration
}

        :global(.swiper-button-next::after),
        :global(.swiper-button-prev::after) {
          font-size: 14px;
        }

        :global(.swiper-pagination-bullet) {
          background: var(--primaryColor);
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .property-content {
            padding: 15px;
          }

          .property-features {
            flex-wrap: wrap;
            gap: 10px;
          }

          .feature-item {
            flex: 1;
            min-width: calc(33.333% - 10px);
          }

      `}</style>
    </div>
  );
};

export default PropertyCard;










